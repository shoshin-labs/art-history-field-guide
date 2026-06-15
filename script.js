(() => {
  const inIframe = window.top !== window;
  const guideBasePath = (() => {
    const { pathname } = window.location;
    if (pathname.includes('/periods/')) {
      return `${pathname.split('/periods/')[0] || ''}/`;
    }
    return pathname.endsWith('.html')
      ? pathname.slice(0, pathname.lastIndexOf('/') + 1)
      : pathname;
  })();
  const guideRoot = `${window.location.origin}${guideBasePath}`.replace(/\/+$|(?<!:)\/\/$/, '/');
  const modalHashPrefix = '#modal=';

  function isModifiedClick(event) {
    return event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0;
  }

  function toAbsoluteUrl(href) {
    return new URL(href, window.location.href).toString();
  }

  function isInternalGuideUrl(url) {
    return url.startsWith(guideRoot) && url.endsWith('.html');
  }

  function resolveModalUrlFromHash() {
    if (!window.location.hash.startsWith(modalHashPrefix)) return null;
    const raw = decodeURIComponent(window.location.hash.slice(modalHashPrefix.length));
    try {
      const absolute = new URL(raw, window.location.origin).toString();
      return isInternalGuideUrl(absolute) ? absolute : null;
    } catch {
      return null;
    }
  }

  function setHashForModal(url) {
    const target = new URL(url);
    const value = `${target.pathname}${target.search}`;
    const nextHash = `${modalHashPrefix}${encodeURIComponent(value)}`;
    if (window.location.hash !== nextHash) {
      window.location.hash = nextHash;
    }
  }

  if (inIframe) {
    document.addEventListener('click', (event) => {
      const link = event.target.closest('a[data-modal="true"]');
      if (!link || isModifiedClick(event)) return;
      const href = link.getAttribute('href');
      if (!href) return;
      const absolute = toAbsoluteUrl(href);
      if (!isInternalGuideUrl(absolute)) return;
      event.preventDefault();
      window.parent.postMessage({ type: 'art-history-guide:open-modal', href: absolute }, window.location.origin);
    });
    return;
  }

  const modal = document.createElement('div');
  modal.className = 'guide-modal';
  modal.setAttribute('aria-hidden', 'true');
  modal.innerHTML = `
    <div class="guide-modal__backdrop" data-modal-close="true"></div>
    <div class="guide-modal__dialog" role="dialog" aria-modal="true" aria-labelledby="guide-modal-title">
      <div class="guide-modal__header">
        <div class="guide-modal__heading">
          <span class="guide-modal__eyebrow">Focus view</span>
          <h2 id="guide-modal-title">Loading chapter…</h2>
        </div>
        <div class="guide-modal__actions">
          <a class="guide-modal__open-page" href="#" target="_blank" rel="noreferrer">Open page ↗</a>
          <button class="guide-modal__close" type="button" aria-label="Close detail view">Close</button>
        </div>
      </div>
      <div class="guide-modal__frame-shell">
        <iframe class="guide-modal__frame" title="Art History detail view" loading="eager"></iframe>
      </div>
    </div>
  `;
  document.body.appendChild(modal);

  const modalTitle = modal.querySelector('#guide-modal-title');
  const modalFrame = modal.querySelector('.guide-modal__frame');
  const modalOpenPage = modal.querySelector('.guide-modal__open-page');
  const modalCloseButton = modal.querySelector('.guide-modal__close');
  const focusableSelector = 'a[href], button:not([disabled]), iframe, [tabindex]:not([tabindex="-1"])';
  let isModalOpen = false;
  let lastFocusedElement = null;
  let currentUrl = null;

  function syncModalTitle() {
    try {
      const nextTitle = modalFrame.contentDocument?.title?.replace(/ · Art History Field Guide$/, '') || 'Art History chapter';
      modalTitle.textContent = nextTitle;
    } catch {
      modalTitle.textContent = 'Art History chapter';
    }
  }

  function setModalOpenState(open) {
    isModalOpen = open;
    modal.classList.toggle('is-open', open);
    modal.setAttribute('aria-hidden', String(!open));
    document.body.classList.toggle('modal-open', open);
  }

  function openModal(url, options = {}) {
    const absolute = toAbsoluteUrl(url);
    if (!isInternalGuideUrl(absolute)) {
      window.location.href = absolute;
      return;
    }

    currentUrl = absolute;
    lastFocusedElement = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    modalTitle.textContent = 'Loading chapter…';
    modalOpenPage.href = absolute;

    if (modalFrame.src !== absolute) {
      modalFrame.src = absolute;
    } else {
      syncModalTitle();
    }

    setModalOpenState(true);
    if (!options.fromHash) {
      setHashForModal(absolute);
    }
    window.setTimeout(() => modalCloseButton.focus(), 30);
  }

  function closeModal(options = {}) {
    if (!isModalOpen) return;
    setModalOpenState(false);
    modalFrame.src = 'about:blank';
    currentUrl = null;

    if (!options.fromHash && window.location.hash.startsWith(modalHashPrefix)) {
      history.pushState(null, '', `${window.location.pathname}${window.location.search}`);
    }

    if (lastFocusedElement) {
      window.setTimeout(() => lastFocusedElement.focus(), 30);
    }
  }

  function maybeOpenFromContainer(event) {
    const container = event.target.closest('.overview-slice, .highlight-card');
    if (!container) return false;
    if (event.target.closest('a, button')) return false;
    const targetLink = container.querySelector('a[data-modal="true"]');
    if (!targetLink) return false;
    event.preventDefault();
    openModal(targetLink.href);
    return true;
  }

  document.addEventListener('click', (event) => {
    const closeTrigger = event.target.closest('[data-modal-close="true"], .guide-modal__close');
    if (closeTrigger) {
      event.preventDefault();
      closeModal();
      return;
    }

    if (maybeOpenFromContainer(event)) return;

    const link = event.target.closest('a[data-modal="true"]');
    if (!link || isModifiedClick(event)) return;
    const href = link.getAttribute('href');
    if (!href) return;
    event.preventDefault();
    openModal(href);
  });

  document.addEventListener('keydown', (event) => {
    if (!isModalOpen) return;
    if (event.key === 'Escape') {
      event.preventDefault();
      closeModal();
      return;
    }
    if (event.key !== 'Tab') return;

    const focusables = [...modal.querySelectorAll(focusableSelector)].filter((el) => el.offsetParent !== null || el === modalFrame);
    if (!focusables.length) return;
    const first = focusables[0];
    const last = focusables[focusables.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  });

  window.addEventListener('message', (event) => {
    if (event.origin !== window.location.origin) return;
    if (event.data?.type === 'art-history-guide:open-modal' && event.data.href) {
      openModal(event.data.href);
    }
  });

  window.addEventListener('hashchange', () => {
    const modalUrl = resolveModalUrlFromHash();
    if (modalUrl) {
      if (!isModalOpen || currentUrl !== modalUrl) {
        openModal(modalUrl, { fromHash: true });
      }
    } else if (isModalOpen) {
      closeModal({ fromHash: true });
    }
  });

  modalFrame.addEventListener('load', () => {
    syncModalTitle();
    try {
      const frameUrl = modalFrame.contentWindow?.location?.href;
      if (frameUrl && isInternalGuideUrl(frameUrl)) {
        currentUrl = frameUrl;
        modalOpenPage.href = frameUrl;
        if (window.location.hash.startsWith(modalHashPrefix)) {
          const target = `${new URL(frameUrl).pathname}${new URL(frameUrl).search}`;
          const currentHashUrl = decodeURIComponent(window.location.hash.slice(modalHashPrefix.length));
          if (currentHashUrl !== target) {
            history.replaceState(null, '', `${window.location.pathname}${window.location.search}${modalHashPrefix}${encodeURIComponent(target)}`);
          }
        }
      }
    } catch {}
  });

  const initialModalUrl = resolveModalUrlFromHash();
  if (initialModalUrl) {
    openModal(initialModalUrl, { fromHash: true });
  }
})();

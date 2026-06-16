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
  const guideRoot = `${window.location.origin}${guideBasePath}`.replace(/\/+$/g, '/');
  const guideBaseUrl = new URL(guideBasePath, window.location.origin);
  const modalHashPrefix = '#modal=';
  const chapterMeta = [
    {
      path: 'periods/foundations.html',
      title: 'Foundations',
      range: 'c. 3100 BCE → 1300 CE',
      summary: 'Ancient, classical, Byzantine, and early medieval foundations: power, sacred images, monuments, manuscripts, mosaics, and cathedral worlds.',
      artists: 'Unknown makers, Phidias workshop, Roman sculptors, Byzantine mosaicists, Insular scribes, cathedral workshops',
      image: 'assets/examples/parthenon-sculptures.jpg'
    },
    {
      path: 'periods/parallel-worlds.html',
      title: 'Parallel worlds',
      range: 'c. 1000 → 1800, with later echoes',
      summary: 'Chinese scrolls, Persian and Mughal painting, Japanese print culture, and South Asian architecture widen the story beyond a single European baton-pass.',
      artists: 'Fan Kuan, Sultan Muhammad, Bichitr, Hokusai, Ustad Ahmad Lahori',
      image: 'assets/examples/travelers-among-mountains-and-streams.jpg'
    },
    {
      path: 'periods/renaissance.html',
      title: 'Renaissance',
      range: 'c. 1300 → 1600',
      summary: 'Perspective, humanism, anatomy, revived classicism, and the tightening of painting into a measured, legible window on the world.',
      artists: 'Giotto, Jan van Eyck, Leonardo da Vinci, Michelangelo, Raphael',
      image: 'assets/artworks/mona-lisa.jpg'
    },
    {
      path: 'periods/baroque-dutch.html',
      title: 'Baroque and Dutch Golden Age',
      range: 'c. 1600 → 1700',
      summary: 'Caravaggio, Artemisia, Rembrandt, Bernini, Velázquez, and Vermeer: light, drama, spectacle, intimacy, and civic life.',
      artists: 'Caravaggio, Artemisia Gentileschi, Bernini, Velázquez, Rembrandt, Vermeer',
      image: 'assets/artworks/calling-saint-matthew.jpg'
    },
    {
      path: 'periods/eighteenth-nineteenth.html',
      title: '18th and 19th centuries',
      range: 'c. 1700 → 1875',
      summary: 'Rococo, Neoclassicism, Romanticism, and Realism overlap rather than forming one neat queue, so the century feels argumentative and unstable.',
      artists: 'Fragonard, Jacques-Louis David, Fuseli, Delacroix, Constable, Millet, Manet',
      image: 'assets/examples/liberty-leading-the-people.jpg'
    },
    {
      path: 'periods/impressionism-modern-break.html',
      title: 'Impressionism to the modern break',
      range: 'c. 1860 → 1907',
      summary: 'Monet, Degas, Cézanne, Van Gogh, and others loosen the window: light flickers, brushwork shows, structure shifts, and painting starts breaking its own rules.',
      artists: 'Monet, Morisot, Manet, Cézanne, Van Gogh, Gauguin',
      image: 'assets/artworks/starry-night.jpg'
    },
    {
      path: 'periods/modernism.html',
      title: 'Modernism',
      range: 'c. 1907 → 1970',
      summary: 'Picasso, abstraction, collage, conceptual expansion, and the explosion of what counts as art in the twentieth century.',
      artists: 'Picasso, Kandinsky, Duchamp, Kahlo, Pollock, Warhol',
      image: 'assets/examples/les-demoiselles-davignon.jpg'
    },
    {
      path: 'periods/contemporary.html',
      title: 'Contemporary and living questions',
      range: 'c. 1970 → now',
      summary: 'Installation, photography, identity, institutions, media, networks, and the question of what art is doing right now.',
      artists: 'Judy Chicago, Cindy Sherman, Louise Bourgeois, and many more living contexts',
      image: 'assets/examples/untitled-film-stills.jpg'
    }
  ];
  const chapterMetaByPath = new Map(chapterMeta.map((entry, index) => [entry.path, { ...entry, index }]));

  function isModifiedClick(event) {
    return event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0;
  }

  function toAbsoluteUrl(href) {
    return new URL(href, window.location.href).toString();
  }

  function isInternalGuideUrl(url) {
    return url.startsWith(guideRoot) && url.endsWith('.html');
  }

  function getGuidePath(url) {
    try {
      const target = new URL(url, window.location.origin);
      if (!target.pathname.startsWith(guideBaseUrl.pathname)) return null;
      const relative = target.pathname.slice(guideBaseUrl.pathname.length).replace(/^\/+/, '');
      return relative || 'index.html';
    } catch {
      return null;
    }
  }

  function getChapterEntry(url) {
    const guidePath = getGuidePath(url);
    if (!guidePath) return null;
    return chapterMetaByPath.get(guidePath) || null;
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
          <span class="guide-modal__eyebrow">Chapter view</span>
          <h2 id="guide-modal-title">Loading chapter…</h2>
          <p class="guide-modal__summary" id="guide-modal-summary">Loading your place in the art-history map…</p>
        </div>
        <div class="guide-modal__actions">
          <div class="guide-modal__jump-controls" aria-label="Chapter navigation">
            <button class="guide-modal__nav guide-modal__nav--prev" type="button" aria-label="Open previous chapter">← Prev</button>
            <button class="guide-modal__nav guide-modal__nav--next" type="button" aria-label="Open next chapter">Next →</button>
          </div>
          <a class="guide-modal__open-page" href="#" target="_blank" rel="noreferrer">Open chapter ↗</a>
          <button class="guide-modal__close" type="button" aria-label="Close detail view">Close</button>
        </div>
      </div>
      <div class="guide-modal__spotlight">
        <div class="guide-modal__spotlight-media">
          <img class="guide-modal__spotlight-image" alt="" />
          <div class="guide-modal__spotlight-overlay"></div>
        </div>
        <div class="guide-modal__spotlight-copy">
          <span class="guide-modal__kicker" id="guide-modal-kicker">Art history field guide</span>
          <strong class="guide-modal__range" id="guide-modal-range">Orienting chapter…</strong>
          <p class="guide-modal__counter" id="guide-modal-counter">Chapter 1 of 8</p>
        </div>
      </div>
      <div class="guide-modal__frame-shell">
        <iframe class="guide-modal__frame" title="Art History detail view" loading="eager"></iframe>
      </div>
      <div class="guide-modal__rail-shell">
        <div class="guide-modal__rail-intro">
          <span>Browse chapters</span>
          <p>Use the filmstrip to move between chapters without losing your place.</p>
        </div>
        <div class="guide-modal__rail" role="tablist" aria-label="Art history chapters"></div>
      </div>
    </div>
  `;
  document.body.appendChild(modal);

  const modalTitle = modal.querySelector('#guide-modal-title');
  const modalSummary = modal.querySelector('#guide-modal-summary');
  const modalRange = modal.querySelector('#guide-modal-range');
  const modalCounter = modal.querySelector('#guide-modal-counter');
  const modalKicker = modal.querySelector('#guide-modal-kicker');
  const modalSpotlightImage = modal.querySelector('.guide-modal__spotlight-image');
  const modalFrame = modal.querySelector('.guide-modal__frame');
  const modalOpenPage = modal.querySelector('.guide-modal__open-page');
  const modalCloseButton = modal.querySelector('.guide-modal__close');
  const modalPrevButton = modal.querySelector('.guide-modal__nav--prev');
  const modalNextButton = modal.querySelector('.guide-modal__nav--next');
  const modalRail = modal.querySelector('.guide-modal__rail');
  const focusableSelector = 'a[href], button:not([disabled]), iframe, [tabindex]:not([tabindex="-1"])';
  let isModalOpen = false;
  let lastFocusedElement = null;
  let currentUrl = null;

  function buildRail() {
    modalRail.innerHTML = chapterMeta.map((entry) => {
      const imageUrl = new URL(entry.image, guideBaseUrl).toString();
      return `
        <button class="guide-modal__thumb" type="button" data-guide-path="${entry.path}" role="tab" aria-selected="false">
          <img src="${imageUrl}" alt="${entry.title}" loading="lazy" />
          <span class="guide-modal__thumb-copy">
            <strong>${entry.title}</strong>
            <small>${entry.range}</small>
          </span>
        </button>
      `;
    }).join('');
  }

  function renderTimelineExplorer() {
    const root = document.querySelector('[data-timeline-explorer]');
    if (!root) return;

    root.innerHTML = `
      <div class="timeline-explorer__rail" role="tablist" aria-label="Interactive art history timeline"></div>
      <article class="timeline-explorer__focus" aria-live="polite"></article>
    `;

    const rail = root.querySelector('.timeline-explorer__rail');
    const focus = root.querySelector('.timeline-explorer__focus');
    let activeIndex = 0;

    function renderFocus(index) {
      const entry = chapterMeta[index];
      if (!entry) return;

      activeIndex = index;
      rail.querySelectorAll('.timeline-stop').forEach((button, buttonIndex) => {
        const isActive = buttonIndex === index;
        button.classList.toggle('is-active', isActive);
        button.setAttribute('aria-selected', String(isActive));
      });

      const prevDisabled = index === 0 ? 'disabled' : '';
      const nextDisabled = index === chapterMeta.length - 1 ? 'disabled' : '';
      const absoluteImage = new URL(entry.image, guideBaseUrl).toString();
      const chapterUrl = new URL(entry.path, guideBaseUrl).toString();

      focus.innerHTML = `
        <div class="timeline-explorer__media">
          <img src="${absoluteImage}" alt="${entry.title}" loading="eager" />
        </div>
        <div class="timeline-explorer__copy">
          <p class="timeline-explorer__range">${entry.range}</p>
          <h3>${entry.title}</h3>
          <p class="timeline-explorer__summary">${entry.summary}</p>
          <p class="timeline-explorer__artists"><strong>Key names / anchors:</strong> ${entry.artists}</p>
          <div class="timeline-explorer__actions">
            <button class="timeline-explorer__nav" type="button" data-direction="prev" ${prevDisabled}>← Prev</button>
            <a class="button primary" data-modal="true" href="${chapterUrl}">Open this chapter</a>
            <button class="timeline-explorer__nav" type="button" data-direction="next" ${nextDisabled}>Next →</button>
          </div>
        </div>
      `;
    }

    rail.innerHTML = chapterMeta.map((entry, index) => `
      <button class="timeline-stop" type="button" role="tab" aria-selected="false" data-index="${index}">
        <span class="timeline-stop__dot" aria-hidden="true"></span>
        <span class="timeline-stop__range">${entry.range}</span>
        <strong>${entry.title}</strong>
      </button>
    `).join('');

    rail.addEventListener('click', (event) => {
      const button = event.target.closest('.timeline-stop');
      if (!button) return;
      renderFocus(Number(button.dataset.index));
    });

    focus.addEventListener('click', (event) => {
      const nav = event.target.closest('[data-direction]');
      if (!nav) return;
      const direction = nav.dataset.direction === 'next' ? 1 : -1;
      const nextIndex = activeIndex + direction;
      if (nextIndex < 0 || nextIndex >= chapterMeta.length) return;
      renderFocus(nextIndex);
      rail.querySelector(`.timeline-stop[data-index="${nextIndex}"]`)?.scrollIntoView({ block: 'nearest', inline: 'center', behavior: 'smooth' });
    });

    renderFocus(activeIndex);
  }

  function getAdjacentChapter(step) {
    const currentEntry = getChapterEntry(currentUrl);
    if (!currentEntry) return null;
    return chapterMeta[currentEntry.index + step] || null;
  }

  function updateModalChrome(url) {
    const entry = getChapterEntry(url);
    const fallbackTitle = 'Art History chapter';
    const fallbackSummary = 'Open chapters in a focused, visual overlay and move across periods without losing the bigger map.';

    if (!entry) {
      modalTitle.textContent = fallbackTitle;
      modalSummary.textContent = fallbackSummary;
      modalRange.textContent = 'Guide chapter';
      modalCounter.textContent = '';
      modalKicker.textContent = 'Art history field guide';
      modalSpotlightImage.removeAttribute('src');
      modalSpotlightImage.alt = '';
      modalPrevButton.disabled = true;
      modalNextButton.disabled = true;
      [...modalRail.querySelectorAll('.guide-modal__thumb')].forEach((button) => {
        button.classList.remove('is-active');
        button.setAttribute('aria-selected', 'false');
      });
      return;
    }

    modalTitle.textContent = entry.title;
    modalSummary.textContent = entry.summary;
    modalRange.textContent = entry.range;
    modalCounter.textContent = `Chapter ${entry.index + 1} of ${chapterMeta.length}`;
    modalKicker.textContent = 'Immersive browse mode';
    modalSpotlightImage.src = new URL(entry.image, guideBaseUrl).toString();
    modalSpotlightImage.alt = entry.title;

    modalPrevButton.disabled = entry.index === 0;
    modalNextButton.disabled = entry.index === chapterMeta.length - 1;

    [...modalRail.querySelectorAll('.guide-modal__thumb')].forEach((button) => {
      const isActive = button.dataset.guidePath === entry.path;
      button.classList.toggle('is-active', isActive);
      button.setAttribute('aria-selected', String(isActive));
      if (isActive) {
        button.scrollIntoView({ block: 'nearest', inline: 'center', behavior: 'smooth' });
      }
    });
  }

  function syncModalTitle() {
    try {
      const nextTitle = modalFrame.contentDocument?.title?.replace(/ · Art History Field Guide$/, '') || null;
      if (nextTitle) {
        modalTitle.textContent = nextTitle;
      }
    } catch {}
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
    modalSummary.textContent = 'Opening a richer view with faster chapter browsing…';
    modalOpenPage.href = absolute;
    updateModalChrome(absolute);

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

  function openAdjacentChapter(step) {
    const nextEntry = getAdjacentChapter(step);
    if (!nextEntry) return;
    openModal(new URL(nextEntry.path, guideBaseUrl).toString());
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

  buildRail();
  renderTimelineExplorer();

  document.addEventListener('click', (event) => {
    const closeTrigger = event.target.closest('[data-modal-close="true"], .guide-modal__close');
    if (closeTrigger) {
      event.preventDefault();
      closeModal();
      return;
    }

    const navButton = event.target.closest('.guide-modal__nav');
    if (navButton) {
      event.preventDefault();
      if (navButton.classList.contains('guide-modal__nav--prev')) {
        openAdjacentChapter(-1);
      } else {
        openAdjacentChapter(1);
      }
      return;
    }

    const thumbButton = event.target.closest('.guide-modal__thumb');
    if (thumbButton) {
      event.preventDefault();
      const entry = chapterMetaByPath.get(thumbButton.dataset.guidePath || '');
      if (entry) {
        openModal(new URL(entry.path, guideBaseUrl).toString());
      }
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
    if (event.key === 'ArrowLeft') {
      event.preventDefault();
      openAdjacentChapter(-1);
      return;
    }
    if (event.key === 'ArrowRight') {
      event.preventDefault();
      openAdjacentChapter(1);
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
        updateModalChrome(frameUrl);
        if (window.location.hash.startsWith(modalHashPrefix)) {
          const frameTarget = new URL(frameUrl);
          const target = `${frameTarget.pathname}${frameTarget.search}`;
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

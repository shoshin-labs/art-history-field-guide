#!/usr/bin/env python3
from __future__ import annotations

from pathlib import Path
import re

ROOT = Path(__file__).resolve().parents[1]
PERIODS_DIR = ROOT / 'periods'

CHAPTERS = [
    {
        'slug': 'foundations',
        'filename': 'foundations.html',
        'index': 1,
        'title': 'Foundations',
        'range': 'c. 3100 BCE → 1300 CE',
        'summary': 'Power, devotion, monument, ritual, and memory remain tightly bound together.',
    },
    {
        'slug': 'parallel-worlds',
        'filename': 'parallel-worlds.html',
        'index': 2,
        'title': 'Parallel worlds',
        'range': 'c. 1000 → 1800, with later echoes',
        'summary': 'Chinese, Persian, Mughal, Japanese, and South Asian traditions unfold on their own terms.',
    },
    {
        'slug': 'renaissance',
        'filename': 'renaissance.html',
        'index': 3,
        'title': 'Renaissance',
        'range': 'c. 1300 → 1600',
        'summary': 'Space, proportion, and classical memory become newly deliberate.',
    },
    {
        'slug': 'baroque-dutch',
        'filename': 'baroque-dutch.html',
        'index': 4,
        'title': 'Baroque and Dutch Golden Age',
        'range': 'c. 1600 → 1700',
        'summary': 'Theatrical light, pressure, spectacle, civic identity, and interior intensity.',
    },
    {
        'slug': 'eighteenth-nineteenth',
        'filename': 'eighteenth-nineteenth.html',
        'index': 5,
        'title': '18th and 19th centuries',
        'range': 'c. 1700 → 1875',
        'summary': 'Elegance, virtue, revolution, dream, landscape, and labour all compete for the century\'s meaning.',
    },
    {
        'slug': 'impressionism-modern-break',
        'filename': 'impressionism-modern-break.html',
        'index': 6,
        'title': 'Impressionism to the modern break',
        'range': 'c. 1860 → 1907',
        'summary': 'Weather, sensation, brushwork, and structural instability open the way toward modernism.',
    },
    {
        'slug': 'modernism',
        'filename': 'modernism.html',
        'index': 7,
        'title': 'Modernism',
        'range': 'c. 1907 → 1970',
        'summary': 'Fracture, reduction, collage, symbol, gesture, and concept renegotiate the terms of art.',
    },
    {
        'slug': 'contemporary',
        'filename': 'contemporary.html',
        'index': 8,
        'title': 'Contemporary and living questions',
        'range': 'c. 1970 → now',
        'summary': 'Plural, global, and contested: media, identity, institutions, memory, and circulation all shape the encounter.',
    },
]

CHAPTER_BY_SLUG = {chapter['slug']: chapter for chapter in CHAPTERS}


def render_chapter_switcher(current_slug: str) -> str:
    current_index = CHAPTER_BY_SLUG[current_slug]['index']
    stops = []
    for chapter in CHAPTERS:
        classes = ['chapter-stop']
        attrs = []
        state = 'Open chapter'
        if chapter['slug'] == current_slug:
            classes.append('is-current')
            attrs.append('aria-current="page"')
            state = 'Current chapter'
        elif chapter['index'] == current_index + 1:
            classes.append('is-next')
            state = 'Next up'

        attrs_str = (' ' + ' '.join(attrs)) if attrs else ''
        stops.append(
            '          '
            f'<a class="{" ".join(classes)}" href="../periods/{chapter["filename"]}"{attrs_str}>'
            f'<span class="chapter-stop__index">Chapter {chapter["index"]}</span>'
            f'<strong class="chapter-stop__title">{chapter["title"]}</strong>'
            f'<span class="chapter-stop__range">{chapter["range"]}</span>'
            f'<span class="chapter-stop__summary">{chapter["summary"]}</span>'
            f'<span class="chapter-stop__state">{state}</span>'
            '</a>'
        )

    return '\n'.join([
        '      <!-- generated:chapter-switcher:start -->',
        '      <div class="chapter-switcher">',
        '        <div class="chapter-switcher__intro">',
        '          <p class="eyebrow">Guide timeline</p>',
        '          <h2>Where this chapter sits</h2>',
        '          <p>Move across the whole guide in sequence: see the dates, where you are now, and the next chapter coming up.</p>',
        '        </div>',
        '        <div class="chapter-timeline" role="navigation" aria-label="Art history guide timeline">',
        *stops,
        '        </div>',
        '      </div>',
        '      <!-- generated:chapter-switcher:end -->',
    ])


def render_continue_nav(current_slug: str) -> str:
    current_pos = next(index for index, chapter in enumerate(CHAPTERS) if chapter['slug'] == current_slug)
    prev_chapter = CHAPTERS[current_pos - 1] if current_pos > 0 else None
    next_chapter = CHAPTERS[current_pos + 1] if current_pos < len(CHAPTERS) - 1 else None

    if prev_chapter:
        prev_href = prev_chapter['filename']
        prev_title = prev_chapter['title']
    else:
        prev_href = '../index.html'
        prev_title = 'Overview'

    if next_chapter:
        next_href = next_chapter['filename']
        next_title = next_chapter['title']
    else:
        next_href = '../index.html'
        next_title = 'Back to overview'

    return '\n'.join([
        '        <!-- generated:next-grid:start -->',
        '        <div class="next-grid">',
        f'          <a class="next-card" href="{prev_href}"><span>Previous</span><strong>{prev_title}</strong></a>',
        '          <a class="next-card" href="../index.html#periods"><span>Jump</span><strong>Chapters</strong></a>',
        f'          <a class="next-card" href="{next_href}"><span>Next</span><strong>{next_title}</strong></a>',
        '        </div>',
        '        <!-- generated:next-grid:end -->',
    ])


def replace_region(text: str, pattern: str, replacement: str, label: str) -> str:
    updated, count = re.subn(pattern, replacement, text, count=1, flags=re.S)
    if count != 1:
        raise RuntimeError(f'Could not replace {label}')
    return updated


def sync_page(path: Path) -> None:
    slug = path.stem
    if slug not in CHAPTER_BY_SLUG:
        raise RuntimeError(f'Unexpected chapter page: {path.name}')

    text = path.read_text()
    switcher = render_chapter_switcher(slug)
    next_grid = render_continue_nav(slug)

    text = replace_region(
        text,
        r'\n\s*<!-- generated:chapter-switcher:start -->.*?<!-- generated:chapter-switcher:end -->\n\s*</header>|\n\s*<div class="chapter-switcher">.*?\n\s*</header>',
        '\n' + switcher + '\n    </header>',
        'chapter switcher',
    )
    text = replace_region(
        text,
        r'\n\s*<!-- generated:next-grid:start -->.*?<!-- generated:next-grid:end -->\n\s*</section>|\n\s*<div class="next-grid">.*?\n\s*</section>',
        '\n' + next_grid + '\n      </section>',
        'next grid',
    )

    path.write_text(text)


if __name__ == '__main__':
    for html_path in sorted(PERIODS_DIR.glob('*.html')):
        sync_page(html_path)
        print(f'synced {html_path.name}')

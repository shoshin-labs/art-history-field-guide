#!/usr/bin/env python3
from __future__ import annotations

from pathlib import Path
import json
import re

ROOT = Path(__file__).resolve().parents[1]
PERIODS_DIR = ROOT / 'periods'
DATA_FILE = ROOT / 'data' / 'chapters.json'
SCRIPT_JS = ROOT / 'script.js'


def load_chapters() -> list[dict]:
    chapters = json.loads(DATA_FILE.read_text())
    expected_indexes = list(range(1, len(chapters) + 1))
    indexes = [chapter['index'] for chapter in chapters]
    if indexes != expected_indexes:
        raise RuntimeError(f'Chapter indexes must be consecutive starting at 1: {indexes}')
    slugs = [chapter['slug'] for chapter in chapters]
    if len(slugs) != len(set(slugs)):
        raise RuntimeError('Chapter slugs must be unique')
    return chapters


CHAPTERS = load_chapters()
CHAPTER_BY_SLUG = {chapter['slug']: chapter for chapter in CHAPTERS}


def render_page_title(chapter: dict) -> str:
    return f'  <title>{chapter["title"]} · Art History Field Guide</title>'


def render_meta_description(chapter: dict) -> str:
    return f'  <meta name="description" content="{chapter["meta_description"]}" />'


def render_period_header_copy(chapter: dict) -> str:
    return '\n'.join([
        '      <!-- generated:period-header-copy:start -->',
        '      <div class="period-header-copy">',
        f'        <p class="eyebrow">{chapter["range"]}</p>',
        f'        <h1>{chapter["title"]}</h1>',
        f'        <p class="lede">{chapter["lede"]}</p>',
        '      </div>',
        '      <!-- generated:period-header-copy:end -->',
    ])


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
            f'<span class="chapter-stop__summary">{chapter["nav_summary"]}</span>'
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


def render_script_chapter_meta() -> str:
    payload = [
        {
            'path': f'periods/{chapter["filename"]}',
            'title': chapter['title'],
            'range': chapter['range'],
            'summary': chapter['summary'],
            'artists': chapter['artists'],
            'image': chapter['image'],
        }
        for chapter in CHAPTERS
    ]
    json_payload = json.dumps(payload, indent=4, ensure_ascii=False)
    return '\n'.join([
        '  // generated:chapter-meta:start',
        f'  const chapterMeta = {json_payload};',
        '  // generated:chapter-meta:end',
    ])


def replace_region(text: str, pattern: str, replacement: str, label: str) -> str:
    updated, count = re.subn(pattern, replacement, text, count=1, flags=re.S)
    if count != 1:
        raise RuntimeError(f'Could not replace {label}')
    return updated


def sync_page(path: Path) -> None:
    slug = path.stem
    chapter = CHAPTER_BY_SLUG.get(slug)
    if not chapter:
        raise RuntimeError(f'Unexpected chapter page: {path.name}')

    text = path.read_text()
    title = render_page_title(chapter)
    meta_description = render_meta_description(chapter)
    header_copy = render_period_header_copy(chapter)
    switcher = render_chapter_switcher(slug)
    next_grid = render_continue_nav(slug)

    text = replace_region(
        text,
        r'\n\s*<title>.*? · Art History Field Guide</title>',
        '\n' + title,
        'page title',
    )
    text = replace_region(
        text,
        r'\n\s*<meta name="description" content=".*?" />',
        '\n' + meta_description,
        'meta description',
    )
    text = replace_region(
        text,
        r'\n\s*<!-- generated:period-header-copy:start -->.*?<!-- generated:period-header-copy:end -->\n\s*<div class="period-header-preview">|\n\s*<div class="period-header-copy">.*?\n\s*</div>\n\s*<div class="period-header-preview">',
        '\n' + header_copy + '\n        <div class="period-header-preview">',
        'period header copy',
    )
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


def sync_script_js() -> None:
    text = SCRIPT_JS.read_text()
    chapter_meta_block = render_script_chapter_meta()
    text = replace_region(
        text,
        r'\n\s*// generated:chapter-meta:start.*?// generated:chapter-meta:end|\n\s*const chapterMeta = \[.*?\n\s*\];',
        '\n' + chapter_meta_block,
        'script chapter meta',
    )
    SCRIPT_JS.write_text(text)


if __name__ == '__main__':
    for html_path in sorted(PERIODS_DIR.glob('*.html')):
        sync_page(html_path)
        print(f'synced page {html_path.name}')
    sync_script_js()
    print(f'synced script {SCRIPT_JS.name}')

const eras = {
  ancient: {
    title: 'Ancient art',
    range: 'c. 3000 BCE – 400 CE',
    places: 'Egypt • Greece • Rome',
    summary: 'Ancient art establishes some of the most durable visual languages in Western art: gods, rulers, ideal bodies, monuments, myth, and public representation.',
    matters: [
      'Religion, empire, commemoration, and ideal beauty',
      'Greek naturalism and proportion become foundational',
      'Roman portraiture, realism, and civic art shape later traditions'
    ],
    lookfor: [
      'Marble sculpture, temples, mosaics, relief carving',
      'Idealized bodies and mythological subjects',
      'Portraits of rulers, heroes, and elites'
    ],
    artists: ['Phidias', 'Praxiteles', 'Roman portrait sculptors', 'Anonymous Egyptian makers']
  },
  medieval: {
    title: 'Medieval art',
    range: 'c. 400 – 1400',
    places: 'Europe • Byzantium',
    summary: 'Medieval art prioritizes sacred meaning over physical realism. Images often act as vehicles for devotion, theology, memory, and spiritual authority.',
    matters: [
      'Christianity dominates subject matter and patronage',
      'Byzantine icons stress divine presence and symbolism',
      'Gothic cathedrals fuse sculpture, stained glass, and architecture'
    ],
    lookfor: [
      'Gold backgrounds, halos, icons, manuscript illumination',
      'Stylized space and bodies rather than naturalism',
      'Didactic religious storytelling'
    ],
    artists: ['Anonymous icon painters', 'Cathedral workshops', 'Illuminators', 'Giotto as a late bridge forward']
  },
  renaissance: {
    title: 'Renaissance',
    range: 'c. 1400 – 1600',
    places: 'Italy • Northern Europe',
    summary: 'The Renaissance revives classical models while developing perspective, anatomical precision, and a new confidence in representing the visible world.',
    matters: [
      'Humanism and classical revival',
      'Scientific observation, perspective, anatomy, and proportion',
      'Balance, clarity, and ideal beauty'
    ],
    lookfor: [
      'Convincing depth and perspective',
      'Carefully ordered composition',
      'Classical architecture, mythology, and heroic figures'
    ],
    artists: ['Leonardo da Vinci', 'Michelangelo', 'Raphael', 'Botticelli', 'Titian', 'Jan van Eyck', 'Dürer']
  },
  baroque: {
    title: 'Baroque',
    range: 'c. 1600 – 1750',
    places: 'Italy • Spain • Dutch Republic • Flanders • France',
    summary: 'Baroque art intensifies everything: light, movement, emotion, persuasion, and presence. It often feels theatrical, embodied, and urgent.',
    matters: [
      'Counter-Reformation drama and religious immediacy',
      'Royal and civic power made spectacular',
      'Light becomes emotional architecture'
    ],
    lookfor: [
      'Chiaroscuro and tenebrism',
      'Gesture, diagonals, theatrical action',
      'Visceral realism and strong emotional pitch'
    ],
    artists: ['Caravaggio', 'Rembrandt', 'Vermeer', 'Rubens', 'Velázquez', 'Bernini']
  },
  eighteenth: {
    title: 'Rococo and Neoclassicism',
    range: '1700s',
    places: 'France • Britain • Europe',
    summary: 'The 18th century swings between pleasure and discipline: Rococo elegance and flirtation on one side, austere classical virtue on the other.',
    matters: [
      'Courtly luxury and decorative refinement',
      'Later return to Greco-Roman severity and moral clarity',
      'Art intersects with Enlightenment and revolution'
    ],
    lookfor: [
      'Rococo softness, curves, gardens, delight',
      'Neoclassical order, stoicism, heroism',
      'Paintings that feel either intimate and playful or politically serious'
    ],
    artists: ['Fragonard', 'Boucher', 'Jacques-Louis David', 'Angelica Kauffman']
  },
  romanticism: {
    title: 'Romanticism',
    range: 'late 1700s – mid 1800s',
    places: 'France • Britain • Germany • Spain',
    summary: 'Romanticism puts imagination, vastness, emotion, and the sublime at center stage. It is drawn to storms, dreams, ruins, revolution, and psychological extremes.',
    matters: [
      'Emotion over strict order',
      'Nature as awe, terror, and transcendence',
      'Political upheaval and inner life'
    ],
    lookfor: [
      'Storms, cliffs, fire, shipwrecks, solitary figures',
      'Heightened color and atmosphere',
      'A sense of intensity or existential scale'
    ],
    artists: ['Goya', 'Delacroix', 'Turner', 'Caspar David Friedrich']
  },
  realism: {
    title: 'Realism',
    range: 'mid 1800s',
    places: 'France and beyond',
    summary: 'Realism rejects idealization in favor of ordinary life, labor, social conditions, and the world as it is rather than as elites prefer to imagine it.',
    matters: [
      'Ordinary people become worthy subjects',
      'Social truth and modern conditions matter',
      'A critical turn away from mythic polish'
    ],
    lookfor: [
      'Workers, peasants, rough surfaces, grounded scale',
      'Plainspoken composition',
      'Political or social undertones'
    ],
    artists: ['Courbet', 'Millet', 'Daumier']
  },
  impressionism: {
    title: 'Impressionism',
    range: 'late 1800s',
    places: 'France',
    summary: 'Impressionism tracks fleeting light, atmosphere, movement, and modern life. It loosens finish in favor of immediacy and perception.',
    matters: [
      'Perception becomes more important than polished illusion',
      'Modern urban and leisure scenes enter high art',
      'Brushwork itself becomes visible and expressive'
    ],
    lookfor: [
      'Broken brushwork and outdoor light',
      'Cafés, boulevards, dance, water, weather',
      'Color relationships rather than hard outlines'
    ],
    artists: ['Monet', 'Renoir', 'Degas', 'Pissarro', 'Morisot']
  },
  postimpressionism: {
    title: 'Post-Impressionism',
    range: 'late 1800s',
    places: 'France and beyond',
    summary: 'Post-Impressionism is less a single style than a set of departures: toward emotion, structure, symbolism, and experiments that help launch modern art.',
    matters: [
      'Van Gogh intensifies feeling through color and brushwork',
      'Cézanne rethinks structure and form',
      'Gauguin and Seurat pursue symbolic and analytical alternatives'
    ],
    lookfor: [
      'Personal color logic',
      'Strong structure beneath appearances',
      'A sense that realism is being pushed open'
    ],
    artists: ['Van Gogh', 'Cézanne', 'Gauguin', 'Seurat']
  },
  modernism: {
    title: 'Modernism',
    range: 'c. 1900 – mid 1900s',
    places: 'Europe • United States',
    summary: 'Modernism breaks the assumption that art must imitate reality. Fragmentation, abstraction, conceptual play, and radical formal experimentation take over.',
    matters: [
      'Art questions representation itself',
      'Multiple avant-garde movements compete and overlap',
      'Form, process, and concept become central'
    ],
    lookfor: [
      'Distortion, flattening, geometry, abstraction',
      'Unnatural color or multiple viewpoints',
      'Works that feel like arguments about what art can be'
    ],
    artists: ['Picasso', 'Matisse', 'Kandinsky', 'Mondrian', 'Duchamp', 'Dalí', 'Miró']
  },
  contemporary: {
    title: 'Contemporary art',
    range: '1945 – now',
    places: 'Global',
    summary: 'Contemporary art expands the field: painting still matters, but so do installation, video, performance, conceptual work, political critique, and global perspectives.',
    matters: [
      'The idea can matter as much as the object',
      'Art becomes deeply international and plural',
      'Identity, systems, media, and spectatorship often become subjects'
    ],
    lookfor: [
      'Installations, seriality, appropriation, text, performance traces',
      'Works that ask conceptual or political questions',
      'A much wider range of media and voices'
    ],
    artists: ['Rothko', 'Warhol', 'Louise Bourgeois', 'David Hockney', 'Basquiat', 'Yayoi Kusama']
  }
};

const pathways = {
  caravaggio: {
    title: 'Your Caravaggio path',
    summary: 'Best if you are drawn to darkness, light, raw realism, religious scenes that feel street-level, and paintings with genuine force.',
    route: ['Late Renaissance foundations', 'Caravaggio', 'Italian Baroque', 'Spanish Baroque', 'Bernini and Baroque sculpture'],
    prompts: [
      'How is light controlling the mood?',
      'How close does the sacred feel to ordinary human life?',
      'Where does the picture feel theatrical, and where does it feel brutally real?'
    ]
  },
  rembrandt: {
    title: 'Your Rembrandt path',
    summary: 'Best if you care about the inner life of people, portraiture, self-portraits, quiet drama, and emotional intelligence in paint.',
    route: ['Dutch Golden Age context', 'Rembrandt portraits', 'Rembrandt etchings', 'Vermeer and domestic light', 'Velázquez for courtly comparison'],
    prompts: [
      'What does the face reveal before the caption does?',
      'How does rough handling add humanity rather than reduce skill?',
      'What is the relationship between silence and psychological depth?'
    ]
  },
  picasso: {
    title: 'Your Picasso path',
    summary: 'Best if you want to understand why modern art stops trying to behave like a window and starts behaving like thought.',
    route: ['Impressionism', 'Cézanne', 'Picasso Blue and Rose periods', 'Cubism', 'Matisse and broader modernism'],
    prompts: [
      'What happens when a painting shows more than one viewpoint at once?',
      'How much of this image is about structure rather than appearance?',
      'What does distortion allow the artist to say?'
    ]
  }
};

const artworks = [
  {
    id: 'calling-saint-matthew',
    title: 'The Calling of Saint Matthew',
    artist: 'Caravaggio',
    year: '1599–1600',
    period: 'Baroque',
    filter: 'baroque',
    image: 'assets/artworks/calling-saint-matthew.jpg',
    alt: 'Caravaggio, The Calling of Saint Matthew',
    why: 'A near-perfect example of Baroque light used as both theology and theater.',
    detail: 'Notice how the beam of light becomes the picture’s argument. This is one of the clearest places to feel the Baroque shift from balance to dramatic encounter.',
    tags: ['light', 'baroque', 'religious scene'],
    link: 'https://en.wikipedia.org/wiki/The_Calling_of_Saint_Matthew_(Caravaggio)'
  },
  {
    id: 'mona-lisa',
    title: 'Mona Lisa',
    artist: 'Leonardo da Vinci',
    year: 'c. 1503–1506',
    period: 'Renaissance',
    filter: 'renaissance',
    image: 'assets/artworks/mona-lisa.jpg',
    alt: 'Leonardo da Vinci, Mona Lisa',
    why: 'A touchstone for Renaissance balance, subtle modeling, and controlled psychological presence.',
    detail: 'This is useful not because it is famous, but because it shows how Renaissance painting can feel stable, composed, and quietly alive.',
    tags: ['portrait', 'sfumato', 'renaissance'],
    link: 'https://en.wikipedia.org/wiki/Mona_Lisa'
  },
  {
    id: 'night-watch',
    title: 'The Night Watch',
    artist: 'Rembrandt',
    year: '1642',
    period: 'Dutch Golden Age',
    filter: 'baroque',
    image: 'assets/artworks/night-watch.jpg',
    alt: 'Rembrandt, The Night Watch',
    why: 'A group portrait turned into movement, atmosphere, and civic drama.',
    detail: 'This helps you see how Dutch art can be realistic without being static. Rembrandt gives public life a pulse.',
    tags: ['rembrandt', 'group portrait', 'dutch'],
    link: 'https://en.wikipedia.org/wiki/The_Night_Watch'
  },
  {
    id: 'girl-pearl',
    title: 'Girl with a Pearl Earring',
    artist: 'Johannes Vermeer',
    year: 'c. 1665',
    period: 'Dutch Golden Age',
    filter: 'baroque',
    image: 'assets/artworks/girl-with-a-pearl-earring.jpg',
    alt: 'Johannes Vermeer, Girl with a Pearl Earring',
    why: 'The counter-example to loud drama: intimate, luminous, and almost impossibly concentrated.',
    detail: 'Use this when you want to feel how quiet painting can still be unforgettable. Light does the emotional work here with extraordinary delicacy.',
    tags: ['vermeer', 'portrait', 'light'],
    link: 'https://en.wikipedia.org/wiki/Girl_with_a_Pearl_Earring'
  },
  {
    id: 'water-lilies',
    title: 'Reflections of Clouds on the Water-Lily Pond',
    artist: 'Claude Monet',
    year: 'c. 1920',
    period: 'Impressionism / late Monet',
    filter: 'impressionism',
    image: 'assets/artworks/water-lilies.jpg',
    alt: 'Claude Monet, Reflections of Clouds on the Water-Lily Pond',
    why: 'A strong way to feel painting become atmosphere, surface, and perception rather than description.',
    detail: 'This is a useful bridge toward modern art because the subject begins to dissolve into color, rhythm, and sensation.',
    tags: ['monet', 'atmosphere', 'surface'],
    link: 'https://en.wikipedia.org/wiki/Water_Lilies_(Monet_series)'
  },
  {
    id: 'starry-night',
    title: 'The Starry Night',
    artist: 'Vincent van Gogh',
    year: '1889',
    period: 'Post-Impressionism',
    filter: 'modern-bridge',
    image: 'assets/artworks/starry-night.jpg',
    alt: 'Vincent van Gogh, The Starry Night',
    why: 'Vital for understanding how emotion, brushwork, and color can carry as much meaning as subject matter.',
    detail: 'This is one of the clearest points where art starts feeling less like passive observation and more like inner experience given visible form.',
    tags: ['van gogh', 'emotion', 'post-impressionism'],
    link: 'https://en.wikipedia.org/wiki/The_Starry_Night'
  },
  {
    id: 'card-players',
    title: 'The Card Players',
    artist: 'Paul Cézanne',
    year: '1890–1892',
    period: 'Post-Impressionism',
    filter: 'modern-bridge',
    image: 'assets/artworks/card-players.jpg',
    alt: 'Paul Cézanne, The Card Players',
    why: 'A beautiful route into the structure that later helps make Picasso make sense.',
    detail: 'Cézanne is less about drama than about building form. If Picasso feels difficult, Cézanne is one of the best stepping stones.',
    tags: ['cézanne', 'structure', 'toward cubism'],
    link: 'https://en.wikipedia.org/wiki/The_Card_Players'
  },
  {
    id: 'judith-holofernes',
    title: 'Judith Slaying Holofernes',
    artist: 'Artemisia Gentileschi',
    year: 'c. 1612–1613',
    period: 'Baroque',
    filter: 'women',
    image: 'assets/artworks/judith-slaying-holofernes.jpg',
    alt: 'Artemisia Gentileschi, Judith Slaying Holofernes',
    why: 'A major Baroque work that expands the canon immediately and forcefully.',
    detail: 'The composition, violence, and physical conviction make this one of the most memorable ways to widen a beginner’s map beyond the default male shortlist.',
    tags: ['women artists', 'baroque', 'artemisia'],
    link: 'https://en.wikipedia.org/wiki/Judith_Slaying_Holofernes_(Artemisia_Gentileschi,_Naples)'
  },
  {
    id: 'the-cradle',
    title: 'The Cradle',
    artist: 'Berthe Morisot',
    year: '1872',
    period: 'Impressionism',
    filter: 'women',
    image: 'assets/artworks/the-cradle.jpg',
    alt: 'Berthe Morisot, The Cradle',
    why: 'A superb way to see how Impressionism can be intimate, domestic, and formally subtle at the same time.',
    detail: 'Morisot belongs in the center of the story, not on the edges. This painting makes that obvious very quickly.',
    tags: ['women artists', 'impressionism', 'morisot'],
    link: 'https://en.wikipedia.org/wiki/The_Cradle_(Morisot)'
  }
];

const glossary = [
  { term: 'Abstraction', definition: 'Moving away from literal representation of things in the visible world.' },
  { term: 'Chiaroscuro', definition: 'Strong contrast between light and dark, especially to model form and heighten drama.' },
  { term: 'Tenebrism', definition: 'An especially extreme form of dark-background lighting, often associated with Caravaggio.' },
  { term: 'Composition', definition: 'How an artwork is arranged: placement, rhythm, balance, emphasis, and movement.' },
  { term: 'Perspective', definition: 'Methods for creating the illusion of depth on a flat surface.' },
  { term: 'Humanism', definition: 'A Renaissance intellectual movement emphasizing classical learning and human potential.' },
  { term: 'Iconography', definition: 'The study of symbols, attributes, and subject matter in images.' },
  { term: 'Patronage', definition: 'Financial support or commissioning of artists by churches, courts, merchants, collectors, or states.' },
  { term: 'Naturalism', definition: 'Depicting figures, light, or space in a lifelike way.' },
  { term: 'Idealization', definition: 'Making forms appear perfected or elevated beyond ordinary observation.' },
  { term: 'The Sublime', definition: 'A mix of awe, grandeur, terror, and emotional intensity, central to much Romantic art.' },
  { term: 'Cubism', definition: 'A modernist approach, associated with Picasso and Braque, that fragments objects into multiple viewpoints.' }
];

const quizData = [
  {
    question: 'Which period is most associated with perspective, anatomical precision, and classical balance?',
    options: ['Renaissance', 'Baroque', 'Romanticism'],
    answer: 'Renaissance',
    explanation: 'The Renaissance is the key period for perspective, anatomy, and harmonious classical order.'
  },
  {
    question: 'If a painting uses extreme darkness and spotlight-like illumination, which term is especially relevant?',
    options: ['Pointillism', 'Tenebrism', 'Minimalism'],
    answer: 'Tenebrism',
    explanation: 'Tenebrism describes dramatic, concentrated contrast between darkness and intense light.'
  },
  {
    question: 'Which artist is the strongest anchor for understanding Cubism in this guide?',
    options: ['Vermeer', 'Picasso', 'David'],
    answer: 'Picasso',
    explanation: 'Picasso is one of the central figures of Cubism and modernist reinvention.'
  },
  {
    question: 'What is usually the best final interpretive question to ask of a work?',
    options: ['How expensive is it?', 'Why did the artist choose this style for this subject?', 'Was the frame original?'],
    answer: 'Why did the artist choose this style for this subject?',
    explanation: 'That question connects style, content, and intention — often the most productive way in.'
  }
];

const eraCard = {
  title: document.getElementById('era-title'),
  range: document.getElementById('era-range'),
  places: document.getElementById('era-places'),
  summary: document.getElementById('era-summary'),
  matters: document.getElementById('era-matters'),
  lookfor: document.getElementById('era-lookfor'),
  artists: document.getElementById('era-artists')
};

function renderList(el, items) {
  el.innerHTML = items.map(item => `<li>${item}</li>`).join('');
}

function setEra(key) {
  const era = eras[key];
  eraCard.title.textContent = era.title;
  eraCard.range.textContent = era.range;
  eraCard.places.textContent = era.places;
  eraCard.summary.textContent = era.summary;
  renderList(eraCard.matters, era.matters);
  renderList(eraCard.lookfor, era.lookfor);
  renderList(eraCard.artists, era.artists);

  document.querySelectorAll('.timeline-pill').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.era === key);
  });
}

document.querySelectorAll('.timeline-pill').forEach(btn => {
  btn.addEventListener('click', () => setEra(btn.dataset.era));
});

function setPathway(key) {
  const path = pathways[key];
  const detail = document.getElementById('path-detail');
  detail.innerHTML = `
    <h3>${path.title}</h3>
    <p>${path.summary}</p>
    <div class="era-grid">
      <div>
        <h4>Suggested route</h4>
        <ul>${path.route.map(item => `<li>${item}</li>`).join('')}</ul>
      </div>
      <div>
        <h4>Questions to ask while looking</h4>
        <ul>${path.prompts.map(item => `<li>${item}</li>`).join('')}</ul>
      </div>
      <div>
        <h4>Why this path works</h4>
        <p>It starts from a visual instinct you already have, so the wider history becomes attached to taste rather than memorization.</p>
      </div>
    </div>
  `;

  document.querySelectorAll('.path-card').forEach(card => {
    card.classList.toggle('active', card.dataset.path === key);
  });
}

document.querySelectorAll('.path-card').forEach(card => {
  card.addEventListener('click', () => setPathway(card.dataset.path));
});

function renderGlossary(query = '') {
  const list = document.getElementById('glossary-list');
  const q = query.trim().toLowerCase();
  const filtered = glossary.filter(item => item.term.toLowerCase().includes(q) || item.definition.toLowerCase().includes(q));
  list.innerHTML = filtered.map(item => `
    <article class="glossary-item">
      <h3>${item.term}</h3>
      <p>${item.definition}</p>
    </article>
  `).join('') || '<p>No glossary terms matched that search.</p>';
}

document.getElementById('glossary-search').addEventListener('input', (event) => {
  renderGlossary(event.target.value);
});

let quizIndex = 0;
let quizAnswered = false;

function renderQuestion() {
  const q = quizData[quizIndex];
  quizAnswered = false;
  document.getElementById('quiz-question').textContent = q.question;
  document.getElementById('quiz-feedback').textContent = '';
  const options = document.getElementById('quiz-options');
  options.innerHTML = q.options.map(option => `<button type="button">${option}</button>`).join('');

  [...options.querySelectorAll('button')].forEach(button => {
    button.addEventListener('click', () => {
      if (quizAnswered) return;
      quizAnswered = true;
      const isCorrect = button.textContent === q.answer;
      button.classList.add(isCorrect ? 'correct' : 'incorrect');
      [...options.querySelectorAll('button')].forEach(btn => {
        if (btn.textContent === q.answer) btn.classList.add('correct');
      });
      document.getElementById('quiz-feedback').textContent = isCorrect
        ? `Correct — ${q.explanation}`
        : `Not quite — ${q.explanation}`;
    });
  });
}

document.getElementById('next-question').addEventListener('click', () => {
  quizIndex = (quizIndex + 1) % quizData.length;
  renderQuestion();
});

let activeFilter = 'all';
let selectedArtworkId = 'calling-saint-matthew';

function getVisibleArtworks() {
  return activeFilter === 'all'
    ? artworks
    : artworks.filter(art => art.filter === activeFilter);
}

function renderSpotlight(artwork) {
  const spotlight = document.getElementById('art-spotlight');
  spotlight.innerHTML = `
    <div class="art-spotlight-image">
      <img src="${artwork.image}" alt="${artwork.alt}" loading="eager" />
    </div>
    <div class="art-spotlight-copy">
      <p class="eyebrow">Selected work</p>
      <h3>${artwork.title}</h3>
      <p class="art-meta">${artwork.artist} · ${artwork.year} · ${artwork.period}</p>
      <p>${artwork.detail}</p>
      <div class="art-tags">${artwork.tags.map(tag => `<span>${tag}</span>`).join('')}</div>
      <div class="spotlight-links">
        <a href="${artwork.link}" target="_blank" rel="noreferrer">Source / context ↗</a>
      </div>
    </div>
  `;
}

function renderGallery() {
  const visible = getVisibleArtworks();
  if (!visible.find(art => art.id === selectedArtworkId)) {
    selectedArtworkId = visible[0]?.id || artworks[0].id;
  }

  const gallery = document.getElementById('art-gallery');
  gallery.innerHTML = visible.map(art => `
    <a class="art-card ${art.id === selectedArtworkId ? 'active' : ''}" href="#art-spotlight" data-art-id="${art.id}">
      <div class="art-image-wrap">
        <img src="${art.image}" alt="${art.alt}" loading="eager" />
      </div>
      <div class="art-copy">
        <p class="art-meta">${art.artist} · ${art.period}</p>
        <h3>${art.title}</h3>
        <p>${art.why}</p>
      </div>
    </a>
  `).join('');

  const selected = artworks.find(art => art.id === selectedArtworkId) || visible[0] || artworks[0];
  renderSpotlight(selected);

  gallery.querySelectorAll('[data-art-id]').forEach(card => {
    card.addEventListener('click', event => {
      event.preventDefault();
      selectedArtworkId = card.dataset.artId;
      renderGallery();
      document.getElementById('art-spotlight').scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    });
  });
}

document.querySelectorAll('.filter-pill').forEach(button => {
  button.addEventListener('click', () => {
    activeFilter = button.dataset.filter;
    document.querySelectorAll('.filter-pill').forEach(btn => btn.classList.toggle('active', btn === button));
    renderGallery();
  });
});

setEra('ancient');
setPathway('caravaggio');
renderGallery();
renderGlossary();
renderQuestion();

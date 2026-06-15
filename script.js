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

setEra('ancient');
setPathway('caravaggio');
renderGlossary();
renderQuestion();

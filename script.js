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

const artworkPlacements = {
  'calling-saint-matthew': 'Sits in: Italian Baroque · Rome · religious drama',
  'mona-lisa': 'Sits in: High Renaissance · Italy/France · portraiture',
  'night-watch': 'Sits in: Dutch Golden Age · Amsterdam · civic portraiture',
  'girl-pearl': 'Sits in: Dutch Golden Age · Delft/The Hague world · intimate portrait/tronie',
  'water-lilies': 'Sits in: late Impressionism → modern bridge · France · landscape/atmosphere',
  'starry-night': 'Sits in: Post-Impressionism · France/Netherlands context · expressive landscape',
  'card-players': 'Sits in: Post-Impressionism · France · structure before Cubism',
  'judith-holofernes': 'Sits in: Baroque · Italy · biblical violence and power',
  'the-cradle': 'Sits in: Impressionism · France · domestic modern life'
};

const exampleAtlas = [
  { title: 'Palette of Narmer', artist: 'Unknown', year: 'c. 3100 BCE', period: 'Ancient', region: 'Egypt', medium: 'Relief / ceremonial object', category: 'foundations', why: 'Early state power and symbolic image-making.', link: 'https://en.wikipedia.org/wiki/Narmer_Palette' },
  { title: 'Parthenon sculptures', artist: 'Phidias workshop', year: '447–432 BCE', period: 'Classical Greek', region: 'Athens', medium: 'Marble sculpture', category: 'foundations', why: 'Ideal bodies, proportion, and classical balance.', link: 'https://en.wikipedia.org/wiki/Parthenon#Sculpture' },
  { title: 'Augustus of Prima Porta', artist: 'Unknown Roman sculptor', year: 'early 1st c. CE', period: 'Roman', region: 'Rome', medium: 'Marble sculpture', category: 'religion-power', why: 'Political image-making through idealized portraiture.', link: 'https://en.wikipedia.org/wiki/Augustus_of_Prima_Porta' },
  { title: 'Hagia Sophia mosaics', artist: 'Byzantine makers', year: '6th–13th c.', period: 'Byzantine / Medieval', region: 'Constantinople', medium: 'Mosaic', category: 'religion-power', why: 'Sacred splendor over naturalistic space.', link: 'https://en.wikipedia.org/wiki/Hagia_Sophia' },
  { title: 'Book of Kells', artist: 'Insular scribes', year: 'c. 800', period: 'Medieval', region: 'Ireland', medium: 'Illuminated manuscript', category: 'foundations', why: 'Shows how image, text, devotion, and ornament can fuse.', link: 'https://en.wikipedia.org/wiki/Book_of_Kells' },
  { title: 'Chartres Cathedral', artist: 'Cathedral workshops', year: '12th–13th c.', period: 'Gothic', region: 'France', medium: 'Architecture / stained glass', category: 'religion-power', why: 'A whole visual world, not just a single painting.', link: 'https://en.wikipedia.org/wiki/Chartres_Cathedral' },
  { title: 'Arena Chapel frescoes', artist: 'Giotto', year: 'c. 1305', period: 'Late Medieval → Proto-Renaissance', region: 'Padua', medium: 'Fresco cycle', category: 'foundations', why: 'A key bridge toward emotional realism and believable space.', link: 'https://en.wikipedia.org/wiki/Scrovegni_Chapel' },
  { title: 'Arnolfini Portrait', artist: 'Jan van Eyck', year: '1434', period: 'Northern Renaissance', region: 'Bruges', medium: 'Oil painting', category: 'portraiture', why: 'Tiny detail, surfaces, and symbolism at a very high level.', link: 'https://en.wikipedia.org/wiki/Arnolfini_Portrait' },
  { title: 'The School of Athens', artist: 'Raphael', year: '1509–1511', period: 'High Renaissance', region: 'Rome', medium: 'Fresco', category: 'foundations', why: 'The cleanest possible statement of Renaissance order and intellect.', link: 'https://en.wikipedia.org/wiki/The_School_of_Athens' },
  { title: 'Sistine Chapel ceiling', artist: 'Michelangelo', year: '1508–1512', period: 'High Renaissance', region: 'Rome', medium: 'Fresco', category: 'religion-power', why: 'Monumental anatomy, drama, and theological ambition.', link: 'https://en.wikipedia.org/wiki/Sistine_Chapel_ceiling' },
  { title: 'Las Meninas', artist: 'Diego Velázquez', year: '1656', period: 'Baroque', region: 'Spain', medium: 'Oil painting', category: 'portraiture', why: 'A great example of court painting becoming a puzzle about seeing.', link: 'https://en.wikipedia.org/wiki/Las_Meninas' },
  { title: 'Ecstasy of Saint Teresa', artist: 'Gian Lorenzo Bernini', year: '1647–1652', period: 'Baroque', region: 'Rome', medium: 'Sculpture / chapel installation', category: 'religion-power', why: 'Baroque theater in sculpture and architecture together.', link: 'https://en.wikipedia.org/wiki/Ecstasy_of_Saint_Teresa' },
  { title: 'The Art of Painting', artist: 'Johannes Vermeer', year: 'c. 1666–1668', period: 'Dutch Golden Age', region: 'Dutch Republic', medium: 'Oil painting', category: 'portraiture', why: 'Quiet interior painting becomes deeply self-aware.', link: 'https://en.wikipedia.org/wiki/The_Art_of_Painting' },
  { title: 'A Philosopher Giving a Lecture on the Orrery', artist: 'Joseph Wright of Derby', year: 'c. 1766', period: '18th century', region: 'Britain', medium: 'Oil painting', category: 'foundations', why: 'Science, enlightenment, and dramatic light meet.', link: 'https://en.wikipedia.org/wiki/A_Philosopher_Giving_a_Lecture_on_the_Orrery' },
  { title: 'The Swing', artist: 'Fragonard', year: '1767', period: 'Rococo', region: 'France', medium: 'Oil painting', category: 'portraiture', why: 'A fast way to feel elegance, flirtation, and decorative pleasure.', link: 'https://en.wikipedia.org/wiki/The_Swing_(Fragonard)' },
  { title: 'Oath of the Horatii', artist: 'Jacques-Louis David', year: '1784', period: 'Neoclassicism', region: 'France', medium: 'Oil painting', category: 'religion-power', why: 'Moral clarity, austerity, and public virtue.', link: 'https://en.wikipedia.org/wiki/Oath_of_the_Horatii' },
  { title: 'The Nightmare', artist: 'Henry Fuseli', year: '1781', period: 'Romanticism / pre-Romantic', region: 'Britain', medium: 'Oil painting', category: 'modern-break', why: 'Dreams and psychological strangeness crash into polite art.', link: 'https://en.wikipedia.org/wiki/The_Nightmare' },
  { title: 'Liberty Leading the People', artist: 'Eugène Delacroix', year: '1830', period: 'Romanticism', region: 'France', medium: 'Oil painting', category: 'religion-power', why: 'History painting charged with politics and emotion.', link: 'https://en.wikipedia.org/wiki/Liberty_Leading_the_People' },
  { title: 'The Hay Wain', artist: 'John Constable', year: '1821', period: 'Romantic landscape', region: 'Britain', medium: 'Oil painting', category: 'foundations', why: 'Landscape becomes emotionally and nationally important.', link: 'https://en.wikipedia.org/wiki/The_Hay_Wain' },
  { title: 'The Gleaners', artist: 'Jean-François Millet', year: '1857', period: 'Realism', region: 'France', medium: 'Oil painting', category: 'portraiture', why: 'Ordinary labor becomes worthy of serious painting.', link: 'https://en.wikipedia.org/wiki/The_Gleaners' },
  { title: 'Olympia', artist: 'Édouard Manet', year: '1863', period: 'Realism → modern break', region: 'France', medium: 'Oil painting', category: 'modern-break', why: 'Modern painting gets flatter, harsher, and more confrontational.', link: 'https://en.wikipedia.org/wiki/Olympia_(Manet)' },
  { title: 'Impression, Sunrise', artist: 'Claude Monet', year: '1872', period: 'Impressionism', region: 'France', medium: 'Oil painting', category: 'modern-break', why: 'The movement gets its name from this turn toward atmosphere.', link: 'https://en.wikipedia.org/wiki/Impression,_Sunrise' },
  { title: 'The Ballet Class', artist: 'Edgar Degas', year: 'c. 1874', period: 'Impressionism', region: 'France', medium: 'Oil painting', category: 'portraiture', why: 'Modern life, unusual cropping, and observational immediacy.', link: 'https://en.wikipedia.org/wiki/The_Ballet_Class' },
  { title: 'A Bar at the Folies-Bergère', artist: 'Édouard Manet', year: '1882', period: 'Modern life painting', region: 'France', medium: 'Oil painting', category: 'modern-break', why: 'Urban modernity and weird visual ambiguity in one image.', link: 'https://en.wikipedia.org/wiki/A_Bar_at_the_Folies-Berg%C3%A8re' },
  { title: 'Where Do We Come From? What Are We? Where Are We Going?', artist: 'Paul Gauguin', year: '1897–1898', period: 'Post-Impressionism', region: 'France/Tahiti context', medium: 'Oil painting', category: 'modern-break', why: 'Symbolism and anti-naturalism push away from plain seeing.', link: 'https://en.wikipedia.org/wiki/Where_Do_We_Come_From%3F_What_Are_We%3F_Where_Are_We_Going%3F' },
  { title: 'Les Demoiselles d’Avignon', artist: 'Pablo Picasso', year: '1907', period: 'Proto-Cubism / Modernism', region: 'Paris', medium: 'Oil painting', category: 'modern-break', why: 'One of the major fractures in Western painting.', link: 'https://en.wikipedia.org/wiki/Les_Demoiselles_d%27Avignon' },
  { title: 'Composition VII', artist: 'Wassily Kandinsky', year: '1913', period: 'Abstraction', region: 'Europe', medium: 'Oil painting', category: 'modern-break', why: 'A clear statement that painting need not depict objects at all.', link: 'https://en.wikipedia.org/wiki/Composition_VII' },
  { title: 'Fountain', artist: 'Marcel Duchamp', year: '1917', period: 'Dada / Conceptual turn', region: 'New York', medium: 'Readymade', category: 'modern-break', why: 'Art history turns from craft alone to ideas and selection.', link: 'https://en.wikipedia.org/wiki/Fountain_(Duchamp)' },
  { title: 'The Two Fridas', artist: 'Frida Kahlo', year: '1939', period: 'Modernism', region: 'Mexico', medium: 'Oil painting', category: 'women', why: 'Identity, pain, duality, and self-fashioning enter the center of the picture.', link: 'https://en.wikipedia.org/wiki/The_Two_Fridas' },
  { title: 'Autumn Rhythm (Number 30)', artist: 'Jackson Pollock', year: '1950', period: 'Abstract Expressionism', region: 'United States', medium: 'Enamel on canvas', category: 'modern-break', why: 'Gesture itself becomes the event.', link: 'https://en.wikipedia.org/wiki/Autumn_Rhythm_(Number_30)' },
  { title: 'Marilyn Diptych', artist: 'Andy Warhol', year: '1962', period: 'Pop Art', region: 'United States', medium: 'Silkscreen', category: 'modern-break', why: 'Mass media and repetition become the subject.', link: 'https://en.wikipedia.org/wiki/Marilyn_Diptych' },
  { title: 'The Dinner Party', artist: 'Judy Chicago', year: '1974–1979', period: 'Contemporary / feminist art', region: 'United States', medium: 'Installation', category: 'women', why: 'A landmark intervention into whose stories art history remembers.', link: 'https://en.wikipedia.org/wiki/The_Dinner_Party' },
  { title: 'Untitled Film Stills', artist: 'Cindy Sherman', year: '1977–1980', period: 'Contemporary', region: 'United States', medium: 'Photography', category: 'women', why: 'Identity and image-making become performances in themselves.', link: 'https://en.wikipedia.org/wiki/Untitled_Film_Stills' },
  { title: 'Maman', artist: 'Louise Bourgeois', year: '1999', period: 'Contemporary', region: 'Global / France-US context', medium: 'Sculpture', category: 'women', why: 'Contemporary art can be monumental, psychological, and symbolic all at once.', link: 'https://en.wikipedia.org/wiki/Maman_(sculpture)' }
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

const timelineWindows = {
  all: { start: -3000, end: 2025, label: '3000 BCE → now' },
  oldmasters: { start: 1400, end: 1900, label: '1400 → 1900' },
  modern: { start: 1860, end: 2025, label: '1860 → now' }
};

const timelineLanes = [
  {
    id: 'ancient-worlds',
    label: 'Mediterranean & ancient worlds',
    items: [
      {
        id: 'egypt-near-east',
        title: 'Egyptian and Near Eastern monumentality',
        start: -3000,
        end: -500,
        tone: 'ochre',
        summary: 'Monumental art tied to kingship, death, divinity, and durable symbolic order.',
        bullets: ['Think tombs, reliefs, hieratic scale, and images made to stabilize cosmic and political power.', 'Useful because it establishes how deeply art begins in ritual, rule, and memory.']
      },
      {
        id: 'classical-greece',
        title: 'Classical Greece',
        start: -800,
        end: -146,
        tone: 'sky',
        summary: 'A foundational moment for naturalism, proportion, heroic bodies, and idealized form.',
        bullets: ['This is one of the key roots of later Western ideas about beauty and anatomy.', 'Useful when Renaissance artists start looking back to antiquity for models.']
      },
      {
        id: 'roman-world',
        title: 'Roman world',
        start: -200,
        end: 476,
        tone: 'ink',
        summary: 'Empire-scale art of portraiture, public space, realism, engineering, and political image-making.',
        bullets: ['Romans expand art into architecture, civic display, and lifelike elite portraiture.', 'A major bridge between classical antiquity and later revivals of antiquity.']
      }
    ]
  },
  {
    id: 'europe',
    label: 'Europe',
    items: [
      {
        id: 'medieval-europe',
        title: 'Medieval & Gothic Europe',
        start: 500,
        end: 1400,
        tone: 'plum',
        summary: 'Sacred storytelling, manuscript illumination, icons, cathedrals, and theology before realism becomes the main goal.',
        bullets: ['Good corrective to the idea that art always aims first at naturalism.', 'Here meaning, devotion, and symbolic clarity often matter more than lifelike space.']
      },
      {
        id: 'renaissance-humanism',
        title: 'Renaissance',
        start: 1400,
        end: 1600,
        tone: 'ochre',
        summary: 'Perspective, anatomy, classical revival, and a new confidence in ordering the visible world.',
        bullets: ['This is the cleanest place to learn balance, humanism, and idealized realism.', 'Leonardo, Michelangelo, Raphael, and Titian make later breaks easier to understand.']
      },
      {
        id: 'baroque-europe',
        title: 'Baroque',
        start: 1600,
        end: 1750,
        tone: 'rose',
        summary: 'Light, movement, persuasion, spectacle, and emotional force.',
        bullets: ['Caravaggio, Bernini, Rembrandt, Rubens, and Velázquez all show different versions of intensity.', 'This is where art becomes unmistakably theatrical and embodied.']
      },
      {
        id: 'euro-18th-19th',
        title: 'Neoclassicism → Romanticism → Realism',
        start: 1750,
        end: 1875,
        tone: 'sage',
        summary: 'A crowded century of discipline, revolt, emotion, politics, and ordinary life entering high art.',
        bullets: ['These movements overlap rather than lining up neatly.', 'It helps explain how Europe moves from courts and myth toward modernity and social truth.']
      },
      {
        id: 'euro-impression-modern',
        title: 'Impressionism → Post-Impressionism',
        start: 1860,
        end: 1905,
        tone: 'sky',
        summary: 'Brushwork loosens, light flickers, and painting starts shifting from description toward perception and structure.',
        bullets: ['Monet and Morisot make atmosphere feel central.', 'Van Gogh and Cézanne then push toward emotion and modern structure.']
      },
      {
        id: 'euro-modern-contemporary',
        title: 'Modernism & contemporary Europe',
        start: 1905,
        end: 2025,
        tone: 'ink',
        summary: 'Cubism, abstraction, conceptual practice, postwar reinventions, and an art world that no longer obeys one style.',
        bullets: ['Picasso matters here, but so do Matisse, Kandinsky, Duchamp, Surrealism, and later conceptual turns.', 'Once here, art stops agreeing on what art has to be.']
      }
    ]
  },
  {
    id: 'islamic',
    label: 'Islamic worlds',
    items: [
      {
        id: 'islamic-golden',
        title: 'Islamic manuscript, geometry, and court arts',
        start: 700,
        end: 1400,
        tone: 'sage',
        summary: 'Calligraphy, geometry, luxury objects, architecture, and manuscript traditions flourish across a vast connected world.',
        bullets: ['Crucial for breaking the false impression that medieval art history is only a European story.', 'Shows a different relationship between text, ornament, sacred space, and figuration.']
      },
      {
        id: 'ottoman-persian-mughal',
        title: 'Ottoman, Safavid, and Mughal court cultures',
        start: 1400,
        end: 1800,
        tone: 'plum',
        summary: 'Painting, textiles, architecture, albums, and luxury production continue in highly refined court settings.',
        bullets: ['These worlds overlap directly with Europe’s Renaissance and Baroque centuries.', 'Useful for seeing that simultaneity does not mean sameness of style or purpose.']
      }
    ]
  },
  {
    id: 'south-asia',
    label: 'South Asia',
    items: [
      {
        id: 'south-asia-sacred',
        title: 'Temple, sculpture, and sacred-image traditions',
        start: -200,
        end: 1600,
        tone: 'ochre',
        summary: 'A long, rich history of sculpture, architecture, and devotional image-making across multiple religions and courts.',
        bullets: ['Important because it stretches across many centuries rather than fitting a single short “movement.”', 'Helps broaden the idea of what major art history looks like beyond European period labels.']
      },
      {
        id: 'south-asia-courts-modern',
        title: 'Court painting to modern South Asian art',
        start: 1500,
        end: 2025,
        tone: 'rose',
        summary: 'Miniature traditions, colonial encounters, and modern/postcolonial reinventions reshape the visual field.',
        bullets: ['This lane runs in parallel with Europe’s Baroque, modern, and contemporary periods.', 'Useful when thinking about empire, modernity, and global art histories together.']
      }
    ]
  },
  {
    id: 'east-asia',
    label: 'East Asia',
    items: [
      {
        id: 'china-handscroll',
        title: 'Chinese scroll painting & literati traditions',
        start: 600,
        end: 1700,
        tone: 'sky',
        summary: 'Landscape, brushwork, philosophy, and cultivated seeing become central to elite visual culture.',
        bullets: ['A different artistic logic from Western illusionism: mood, rhythm, and brush-thinking matter deeply.', 'Especially useful if you want alternatives to perspective-centered art history.']
      },
      {
        id: 'japan-edo-ukiyoe',
        title: 'Edo Japan & ukiyo-e',
        start: 1600,
        end: 1868,
        tone: 'plum',
        summary: 'Print culture, urban pleasure worlds, design, and stylization become major forces.',
        bullets: ['This later feeds directly into European modern taste through Japonisme.', 'A great example of cross-cultural influence arriving non-simultaneously.']
      },
      {
        id: 'east-asia-modern',
        title: 'Modern and contemporary East Asia',
        start: 1868,
        end: 2025,
        tone: 'sage',
        summary: 'Tradition, industrial modernity, war, nationalism, and global exchange all reshape artistic production.',
        bullets: ['Useful for understanding that modernism becomes global, not just European.', 'This lane keeps expanding the story past a Paris-only map.']
      }
    ]
  },
  {
    id: 'global-modern',
    label: 'Global modern & contemporary',
    items: [
      {
        id: 'global-modernism',
        title: 'Global modernisms',
        start: 1900,
        end: 1970,
        tone: 'ink',
        summary: 'Many avant-gardes and national modernisms emerge at once, often shaped by empire, technology, and urban change.',
        bullets: ['Modernism is not one style and not one place.', 'Picasso is one door in, but the room is much bigger than Paris.']
      },
      {
        id: 'global-contemporary',
        title: 'Contemporary global art',
        start: 1970,
        end: 2025,
        tone: 'rose',
        summary: 'Installation, video, identity, politics, market systems, biennials, and global circuits of display dominate the contemporary field.',
        bullets: ['Useful because it shows art history ending in plurality, not consensus.', 'Different media and geographies now sit in the same conversation.']
      }
    ]
  }
];

let currentTimelineWindow = 'all';
let selectedTimelineBandId = 'renaissance-humanism';

const eraCard = {
  title: document.getElementById('era-title'),
  range: document.getElementById('era-range'),
  places: document.getElementById('era-places'),
  summary: document.getElementById('era-summary'),
  matters: document.getElementById('era-matters'),
  lookfor: document.getElementById('era-lookfor'),
  artists: document.getElementById('era-artists')
};

function formatYear(year) {
  if (year < 0) return `${Math.abs(year)} BCE`;
  if (year === 0) return '0';
  return `${year}`;
}

function getAllTimelineItems() {
  return timelineLanes.flatMap(lane => lane.items.map(item => ({ ...item, laneLabel: lane.label })));
}

function setTimelineFocus(itemId) {
  const item = getAllTimelineItems().find(entry => entry.id === itemId) || getAllTimelineItems()[0];
  if (!item) return;
  selectedTimelineBandId = item.id;

  const focus = document.getElementById('timeline-focus');
  focus.innerHTML = `
    <div class="timeline-focus-top">
      <span class="timeline-focus-range">${formatYear(item.start)} → ${formatYear(item.end)}</span>
      <span class="timeline-focus-lane">${item.laneLabel}</span>
    </div>
    <h3>${item.title}</h3>
    <div class="timeline-focus-grid">
      <div>
        <p>${item.summary}</p>
      </div>
      <div>
        <h4>Why it matters</h4>
        <ul>${item.bullets.map(point => `<li>${point}</li>`).join('')}</ul>
      </div>
    </div>
  `;

  document.querySelectorAll('.timeline-band').forEach(band => {
    band.classList.toggle('active', band.dataset.bandId === item.id);
  });
}

function renderParallelTimeline() {
  const board = document.getElementById('parallel-timeline');
  const axis = document.getElementById('timeline-axis');
  const windowConfig = timelineWindows[currentTimelineWindow];
  const span = windowConfig.end - windowConfig.start;
  const width = Math.max(920, Math.round(span * 0.32));
  const tickStep = currentTimelineWindow === 'all' ? 500 : currentTimelineWindow === 'oldmasters' ? 50 : 20;

  axis.style.width = `${width}px`;
  axis.innerHTML = '';

  for (let year = windowConfig.start; year <= windowConfig.end; year += tickStep) {
    const position = ((year - windowConfig.start) / span) * width;
    axis.insertAdjacentHTML('beforeend', `
      <div class="axis-tick" style="left:${position}px">
        <span>${formatYear(year)}</span>
      </div>
    `);
  }

  const visibleItems = timelineLanes.flatMap(lane => lane.items.filter(item => item.end >= windowConfig.start && item.start <= windowConfig.end));
   if (!visibleItems.find(item => item.id === selectedTimelineBandId)) {
     selectedTimelineBandId = visibleItems[0]?.id || selectedTimelineBandId;
   }

   board.style.width = `${width}px`;
   board.innerHTML = timelineLanes.map(lane => {
     const items = lane.items.filter(item => item.end >= windowConfig.start && item.start <= windowConfig.end);
     if (!items.length) return '';

     const bands = items.map(item => {
       const start = Math.max(item.start, windowConfig.start);
       const end = Math.min(item.end, windowConfig.end);
       const left = ((start - windowConfig.start) / span) * width;
       const itemWidth = Math.max(88, ((end - start) / span) * width);
       return `
         <button
           type="button"
           class="timeline-band tone-${item.tone} ${item.id === selectedTimelineBandId ? 'active' : ''}"
           data-band-id="${item.id}"
           style="left:${left}px; width:${itemWidth}px"
           title="${item.title}: ${formatYear(item.start)} to ${formatYear(item.end)}"
         >
           <span>${item.title}</span>
         </button>
       `;
     }).join('');

     return `
       <div class="timeline-lane">
         <div class="timeline-lane-label">${lane.label}</div>
         <div class="timeline-lane-track">${bands}</div>
       </div>
     `;
   }).join('');

   board.querySelectorAll('.timeline-band').forEach(button => {
     button.addEventListener('click', () => setTimelineFocus(button.dataset.bandId));
   });

   setTimelineFocus(selectedTimelineBandId);
}

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
let activeAtlasFilter = 'all';

function getVisibleArtworks() {
  return activeFilter === 'all'
    ? artworks
    : artworks.filter(art => art.filter === activeFilter);
}

function getVisibleAtlasExamples() {
  return activeAtlasFilter === 'all'
    ? exampleAtlas
    : exampleAtlas.filter(item => item.category === activeAtlasFilter);
}

function renderAtlasSummary() {
  const visible = getVisibleAtlasExamples();
  const summary = document.getElementById('atlas-summary-strip');
  const periods = new Set(visible.map(item => item.period));
  const regions = new Set(visible.map(item => item.region));
  summary.innerHTML = `
    <div class="atlas-summary-card">
      <strong>${visible.length}</strong>
      <span>examples in view</span>
    </div>
    <div class="atlas-summary-card">
      <strong>${periods.size}</strong>
      <span>period labels represented</span>
    </div>
    <div class="atlas-summary-card">
      <strong>${regions.size}</strong>
      <span>regional contexts represented</span>
    </div>
  `;
}

function renderExampleAtlas() {
  const visible = getVisibleAtlasExamples();
  const grid = document.getElementById('example-atlas-grid');
  renderAtlasSummary();
  grid.innerHTML = visible.map(item => `
    <a class="atlas-card" href="${item.link}" target="_blank" rel="noreferrer">
      <div class="atlas-card-top">
        <p class="atlas-card-meta">${item.artist} · ${item.year}</p>
        <h3>${item.title}</h3>
      </div>
      <div class="atlas-chip-row">
        <span>${item.period}</span>
        <span>${item.region}</span>
        <span>${item.medium}</span>
      </div>
      <p>${item.why}</p>
      <div class="atlas-sits">Sits in: ${item.period} · ${item.region} · ${item.medium}</div>
    </a>
  `).join('');
}

function renderSpotlight(artwork) {
  const spotlight = document.getElementById('art-spotlight');
  const placement = artworkPlacements[artwork.id] || `Sits in: ${artwork.period}`;
  spotlight.innerHTML = `
    <div class="art-spotlight-image">
      <img src="${artwork.image}" alt="${artwork.alt}" loading="eager" />
    </div>
    <div class="art-spotlight-copy">
      <p class="eyebrow">Selected work</p>
      <h3>${artwork.title}</h3>
      <p class="art-meta">${artwork.artist} · ${artwork.year} · ${artwork.period}</p>
      <p class="art-placement">${placement}</p>
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
        <p class="art-placement">${artworkPlacements[art.id] || `Sits in: ${art.period}`}</p>
        <p>${art.why}</p>
        <div class="art-card-tags">${art.tags.map(tag => `<span>${tag}</span>`).join('')}</div>
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

document.querySelectorAll('.atlas-pill').forEach(button => {
  button.addEventListener('click', () => {
    activeAtlasFilter = button.dataset.atlasFilter;
    document.querySelectorAll('.atlas-pill').forEach(btn => btn.classList.toggle('active', btn === button));
    renderExampleAtlas();
  });
});

document.querySelectorAll('.timeline-window-pill').forEach(button => {
  button.addEventListener('click', () => {
    currentTimelineWindow = button.dataset.window;
    document.querySelectorAll('.timeline-window-pill').forEach(btn => btn.classList.toggle('active', btn === button));
    renderParallelTimeline();
  });
});

renderParallelTimeline();
setEra('ancient');
setPathway('caravaggio');
renderGallery();
renderExampleAtlas();
renderGlossary();
renderQuestion();

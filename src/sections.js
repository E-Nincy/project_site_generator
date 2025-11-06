
// src/sections.js

const SECTION_TYPES = {
  header: header,
  text: text,
  gallery: gallery,
  contact: contact,
  links: links
};

function chooseRandomItem(array) {
  // Returns a random element from any given array
  return array[Math.floor(Math.random() * array.length)];
}

function buildSections(sections) {
  const body = document.getElementById('root');

  sections.forEach((section) => {
    const builder = SECTION_TYPES[section.type];
    if (typeof builder === 'function') {
      body.append(builder(section));
    } else {
      console.warn(`No builder for section type: ${section.type}`);
    }
  });
}

// ---- Blank-ish builders for now ----
function header(section) {
  // Create main header container
  const container = make('section', '', 'header-container');

  // Create the main title
  const title = make('h1', section.header);
  container.append(title);

  // Check if the section has an images array
  if (section.hasOwnProperty('images')) {
    // Create image and set a random one from the array
    const image = make('img', '', 'header-image');
    image.src = chooseRandomItem(section.images);
    image.alt = section.header || 'Header image';
    container.append(image);
  }

  return container;
}

function text(section) {
  // Create container for text section
  const container = make('section', '', 'text-container');

  // Create header and paragraph
  const header = make('h2', section.header);
  const paragraph = make('p', section.text);

  // Add both to the container
  container.append(header, paragraph);

  return container;
}

function gallery(section) {
  // Create container for gallery
  const container = make('section', '', 'gallery-container');

  // Choose one random image from the array
  const src = chooseRandomItem(section.images);
  const image = make('img', '', 'gallery-image');
  image.src = src;
  image.alt = 'Gallery image';

  // Add the image to the container
  container.append(image);

  return container;
}

function contact(section) {
  const el = make('section', '', 'contact');
  if (section.header) el.append(make('h2', section.header));
  return el;
}

function links(section) {
  const el = make('section', '', 'links');
  (section.links || []).forEach(l => {
    el.append(make('a', l.text || l.href || 'link'));
    el.lastChild.href = l.href || '#';
    el.lastChild.target = '_blank';
  });
  return el;
}
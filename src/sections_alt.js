// src/sections_alt.js

function headerAlt(headerText, images = []) {
  const container = make('section', '', 'header-alt');
  container.append(make('h1', headerText));

  if (images.length > 0) {
    const img = make('img', '', 'header-image');
    img.src = images[Math.floor(Math.random() * images.length)];
    img.alt = headerText;
    container.append(img);
  }

  return container;
}

function textAlt(title, body) {
  const container = make('section', '', 'text-alt');
  container.append(make('h2', title));
  container.append(make('p', body));
  return container;
}

function galleryAlt(images = []) {
  const container = make('section', '', 'gallery-alt');
  if (images.length > 0) {
    const img = make('img', '', 'gallery-image');
    img.src = images[Math.floor(Math.random() * images.length)];
    img.alt = 'Gallery image';
    container.append(img);
  }
  return container;
}

function buildSectionsAlt(sections) {
  const root = document.getElementById('root');

  sections.forEach(s => {
    let element;
    if (s.type === 'header') element = headerAlt(s.header, s.images);
    else if (s.type === 'text') element = textAlt(s.header, s.text);
    else if (s.type === 'gallery') element = galleryAlt(s.images);

    if (element) root.append(element);
  });
}

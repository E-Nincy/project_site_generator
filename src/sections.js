
// src/sections.js

const SECTION_TYPES = {
  header: header,
  text: text,
  gallery: gallery,
  contact: contact,
  links: links,
  video: video
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
  const container = make('section', '', 'gallery-container');
  const img = make('img', '', 'gallery-image');
  let index = 0;

  if (section.images && section.images.length > 0) {
    img.src = section.images[index];
    img.alt = 'Gallery image';
    container.append(img);

    // Change each 5 seconds
    let timer = setInterval(nextImage, 5000);

    function nextImage() {
      index = (index + 1) % section.images.length;
      img.src = section.images[index];
    }

    // Resets the timer on click
    img.addEventListener('click', () => {
      clearInterval(timer);
      nextImage();
      timer = setInterval(nextImage, 5000);
    });
  }

  return container;
}

function contact(section) {
  // Create the contact section container
  const container = make('section', '', 'contact-container');

  // 1) header
  if (section.hasOwnProperty('header')) {
    container.append(make('h2', section.header));
  }

  // 2) email (as a mailto: link)
  if (section.hasOwnProperty('email') && section.email) {
    const emailLink = make('a', 'E-mail me');
    emailLink.href = 'mailto:' + section.email;
    container.append(emailLink);
  }

  // 3) phone
  if (section.hasOwnProperty('phone') && section.phone) {
    container.append(make('p', section.phone));
  }

  // 4) form (call the placeholder builder for now)
  if (section.hasOwnProperty('form')) {
    container.append(build_form(section.form));
  }

  // 5) images (pick one at random if provided)
  if (section.hasOwnProperty('images') && Array.isArray(section.images) && section.images.length) {
    const img = make('img', '', 'gallery-image');
    img.src = chooseRandomItem(section.images);
    img.alt = 'Contact image';
    // Optional: remove the <img> if it fails to load
    img.onerror = () => img.remove();
    container.append(img);
  }

  return container;
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

function video(section) {
  const container = make('section', '', 'video-container');
  if (section.header) container.append(make('h2', section.header));

  const iframe = make('iframe');
  if (!section.url) return container; // guard clause if no URL provided

  iframe.src = section.url;
  iframe.width = '560';
  iframe.height = '315';
  iframe.title = section.header || 'Embedded video';
  iframe.setAttribute('allowfullscreen', ''); // standard attribute
  // Optional: set other allow attributes
  iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture');

  container.append(iframe);
  return container;
}

// Reusable helper to append a random image from a section
function addRandomImage(section, container) {
  if (section.images && section.images.length > 0) {
    const img = make('img', '', 'random-image');
    img.src = chooseRandomItem(section.images);
    img.alt = section.header || 'Section image';
    container.append(img);
  }
}

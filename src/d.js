// src/d.js
// d.js — Custom Micro Library
// Extended DOM helper functions for the Site Generator project

// --- Original make function (kept for compatibility) ---
function make(tag, text = '', className = '', id = '') {
  const el = document.createElement(tag);

  if (text) el.innerText = text;
  if (className) el.classList.add(className);
  if (id) el.id = id;

  return el;
}

// --- Extended Micro Library ---

// Create an image element easily
function makeImage(src, alt = '', className = '', id = '') {
  const img = document.createElement('img');
  img.src = src;
  img.alt = alt;
  if (className) img.classList.add(className);
  if (id) img.id = id;
  return img;
}

// Create a link (anchor) element
function makeLink(href, text, className = '', target = '_blank') {
  const a = document.createElement('a');
  a.href = href;
  a.textContent = text;
  if (className) a.classList.add(className);
  a.target = target;
  return a;
}

// Create a button with click event
function makeButton(text, onClick, className = '', id = '') {
  const btn = document.createElement('button');
  btn.textContent = text;
  if (className) btn.classList.add(className);
  if (id) btn.id = id;
  if (onClick) btn.addEventListener('click', onClick);
  return btn;
}

// Create input fields easily
function makeInput(type = 'text', name = '', placeholder = '', required = false) {
  const input = document.createElement('input');
  input.type = type;
  input.name = name;
  input.placeholder = placeholder;
  if (required) input.required = true;
  return input;
}


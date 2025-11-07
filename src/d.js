// src/d.js

// global function
function make(tag, text = '', className = '', id = '') {
  const el = document.createElement(tag);

  if (text) el.innerText = text;
  if (className) el.classList.add(className);
  if (id) el.id = id;

  return el;
}


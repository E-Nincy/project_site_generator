// src/form.js

function isEmail(string) {
  const emailRegex = /.+@.+/;
  return Boolean(string.match(emailRegex));
}

function emailValidator(e) {
  if (!isEmail(e.target.value)) {
    e.target.style.backgroundColor = 'red';
  } else {
    e.target.style.backgroundColor = '';
  }
}

// New submit handler
function submitHandler(e) {
  e.preventDefault();

  const formData = new FormData(e.target);
  const entries = formData.entries();
  const output = {};

  let data = entries.next();
  while (data.done !== true) {
    output[data.value[0]] = data.value[1];
    data = entries.next();
  }

// Check required fields
const requiredInputs = e.target.querySelectorAll('[required]');
let allFilled = true;
requiredInputs.forEach(input => {
  if (!input.value.trim()) {
    allFilled = false;
    input.style.borderColor = 'red';
  } else {
    input.style.borderColor = '';
  }
});
if (!allFilled) {
  alert('Please fill in all required fields.');
  return;
}

  if (!isEmail(output['email'])) {
    alert('Invalid Form Submission');
    return;
  }

  console.log('Form submission successful:', output);
}

function build_form(fields) {
  const formElement = make('form');

  fields.forEach((field) => {
    const fieldContainer = make('div');

    if (field.type === 'text') {
      const idString = 'input' + field.type + field.label;
      const input = make('input');
      input.type = 'text';
      input.id = idString;
      input.name = field.label;

      const label = make('label', field.label);
      label.htmlFor = idString;
      fieldContainer.append(label, make('br'), input);
    } else if (field.type === 'email') {
      const idString = 'input' + field.type + field.label;
      const input = make('input');
      input.type = 'text';
      input.id = idString;
      input.name = 'email';

      input.addEventListener('input', emailValidator);

      const label = make('label', field.label);
      label.htmlFor = idString;
      fieldContainer.append(label, make('br'), input);
    }

    formElement.append(fieldContainer);
  });

  const submitButton = make('input');
  submitButton.type = 'submit';
  submitButton.value = 'Submit';
  formElement.append(submitButton);

  // add event listener here
  formElement.addEventListener('submit', submitHandler);

  return formElement;
}

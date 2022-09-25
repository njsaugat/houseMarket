function callInvalid(element) {
  element.classList.add('invalid');
}

function callValid(element) {
  element.classList.add('valid');
}

function createError(element, message) {
  const span = document.createElement('span');
  span.innerText = message;
  span.classList.add('error');
  element.parentNode.appendChild(span);
}

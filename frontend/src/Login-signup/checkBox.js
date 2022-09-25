export function checkCheckBox(checkbox) {
  if (!checkbox.checked) {
    createError(checkbox, 'Required');
    return false;
  }
  return true;
}

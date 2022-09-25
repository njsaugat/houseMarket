export function checkPassword(password) {
  if (password.value.length < 6) {
    callInvalid(password);
    createError(password, 'Password must be at least 6 characters');
    return false;
  }
  callValid(password);
  return true;
}

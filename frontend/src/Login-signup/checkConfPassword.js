export function checkConfPassword(confPassword, password) {
  if (confPassword.value.length <= 0) {
    callInvalid(confPassword);
    createError(confPassword, 'Confirm your password');
    return false;
  } else if (confPassword.value !== password.value) {
    callInvalid(confPassword);
    createError(confPassword, 'Both passwords must match');
    return false;
  } else {
    callValid(confPassword);
    return true;
  }
}

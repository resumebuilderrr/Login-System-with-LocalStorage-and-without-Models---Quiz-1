export function validateLogin({ email, password }) {
  const errors = {};
  if (!email) {
    errors.email = "Email is required";
  } else {
    const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRe.test(email)) errors.email = "Enter a valid email";
  }

  if (!password) {
    errors.password = "Password is required";
  }
  return { isValid: Object.keys(errors).length === 0, errors };
}

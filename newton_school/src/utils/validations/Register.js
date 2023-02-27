/**
 * Name : Min 4 and Max 10 characters
 * Email : Valid email
 * Password : Min 8 characters, includes an alphabet and a number, one upper case char, one lower case char and one special character
 */
export const validateForm = (formObject) => {
  const errors = {};
  if (formObject.name.length < 4 || formObject.name.length > 10) {
    // InValid name
    errors.name = "Name should contain min 4 and max 10 characters";
  }

  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (!emailRegex.test(formObject.email)) {
    // InValid email
    errors.email = "Please enter a valid email address";
  }

  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
  if (!passwordRegex.test(formObject.password)) {
    // Valid password
    errors.password =
      "Password should contain min 8 characters, and must have an alphabet, number, lower, upper and special character";
  }

  return errors;
};

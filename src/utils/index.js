export const checkValidEmail = (email) => {
  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // regex
  return pattern.test(email); // true or false
};

export const checkValidPassword = (password) => {
  const pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;
  return pattern.test(password);
};

export const checkValidUserName = (username) => {
  const pattern = /^[a-zA-Z0-9_]{3,}$/;
  return pattern.test(username);
};

export const checkValidPhoneNumber = (phone) => {
  const pattern = /^\+?[1-9]\d{1,14}$/; // E.164 format
  return pattern.test(phone);
};

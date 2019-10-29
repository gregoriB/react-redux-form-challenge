export const validateName = (username) => {
    const stringTest = /^[A-Z a-z]*$/.test(username);
    const isValidLength = username.length > 0 && username.length < 100;
    return stringTest && isValidLength;
};

export const validateEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
};

export const validatePassword = (password) => {
    const isValidLength = password.length > 0;
    const stringTest = /^[A-Za-z0-9?!_-]*$/.test(password);
    const specialCharTest = /[A-Z]/.test(password) && /[?!]/.test(password);
    return stringTest && specialCharTest && isValidLength;
};
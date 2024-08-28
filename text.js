const {generatePassword} = require("./index");
const options = {
    includeLowercase: true,
    includeUppercase: true,
    includeNumbers: true,
    includeSpecialChars: true
};
const password = generatePassword(12, options);
console.log(password);
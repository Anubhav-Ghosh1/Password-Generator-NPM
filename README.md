## Password Generator
Password Generator takes 4 parameters along with length as an input and generates password according to the parameters.

## Usage
```
const {generatePassword} = require("password-generator-v1");
const options = {
    includeLowercase: true,
    includeUppercase: true,
    includeNumbers: true,
    includeSpecialChars: true
};
const password = generatePassword(12, options);
console.log(password);
```
## About
Hi, I am Anubhav Ghosh passionate C++ and MERN Stack developer.
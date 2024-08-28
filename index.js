function generatePassword(length, options) {
    const lowercase = 'abcdefghijklmnopqrstuvwxyz';
    const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    const specialChars = '!@#$%^&*()_+[]{}|;:,.<>?';
    
    let characterSet = '';
    if (options.includeLowercase) characterSet += lowercase;
    if (options.includeUppercase) characterSet += uppercase;
    if (options.includeNumbers) characterSet += numbers;
    if (options.includeSpecialChars) characterSet += specialChars;
    
    if (characterSet.length === 0) {
        throw new Error('At least one character type must be selected');
    }

    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characterSet.length);
        password += characterSet[randomIndex];
    }

    return password;
}

module.exports = {generatePassword};
// const password = generatePassword(12, options);
// console.log(password);
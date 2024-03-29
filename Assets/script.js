// Array of special characters to be included in password
const specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
const numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
const lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
const upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function to prompt user for password options
function getPasswordOptions() {

}

// Function for getting a random element from an array
function getRandom(arr) {

}

// Function to generate password with user input
function generatePassword() {

}

// Get references to the #generate element
const generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  const password = generatePassword();
  const passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);

// Prompt user for password criteria and return object containing those options.
function getPasswordOptions() {
  const length = parseInt(prompt('How many characters would you like your password to be?'));
  if (isNaN(length) || length < 8 || length > 128) {
      alert('Password length must be a number between 8 and 128.');
      return null;
  }

  const hasSpecialCharacters = confirm('Click OK to include special characters.');
  const hasNumericCharacters = confirm('Click OK to include numeric characters.');
  const hasLowerCasedCharacters = confirm('Click OK to include lowercase characters.');
  const hasUpperCasedCharacters = confirm('Click OK to include uppercase characters.');

  if (!hasSpecialCharacters && !hasNumericCharacters && !hasLowerCasedCharacters && !hasUpperCasedCharacters) {
      alert('Must select at least one character type.');
      return null;
  }

  return {
      length,
      hasSpecialCharacters,
      hasNumericCharacters,
      hasLowerCasedCharacters,
      hasUpperCasedCharacters
  };
}

// Helper function to retrieve a random element from an array
function getRandom(arr) {
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}

// Use  selected criteria to generate new password
function generatePassword() {
  const options = getPasswordOptions();
  if (!options) return '';

  const possibleCharacters = [];
  const guaranteedCharacters = [];
  let generatedPassword = '';

  if (options.hasSpecialCharacters) {
      possibleCharacters.push(...specialCharacters);
      guaranteedCharacters.push(getRandom(specialCharacters));
  }

  if (options.hasNumericCharacters) {
      possibleCharacters.push(...numericCharacters);
      guaranteedCharacters.push(getRandom(numericCharacters));
  }

  if (options.hasLowerCasedCharacters) {
      possibleCharacters.push(...lowerCasedCharacters);
      guaranteedCharacters.push(getRandom(lowerCasedCharacters));
  }

  if (options.hasUpperCasedCharacters) {
      possibleCharacters.push(...upperCasedCharacters);
      guaranteedCharacters.push(getRandom(upperCasedCharacters));
  }

  for (let i = 0; i < options.length; i++) {
      if (i < guaranteedCharacters.length) {
          generatedPassword += guaranteedCharacters[i];
      } else {
          generatedPassword += getRandom(possibleCharacters);
      }
  }

  return generatedPassword;
}

// Ensuring function works with updated generatePassword logic

function writePassword() {
  const password = generatePassword();
  const passwordText = document.querySelector('#password');

  passwordText.textContent = password;
}


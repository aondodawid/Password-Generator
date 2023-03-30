const get = (el) => document.getElementById(el);

const specialChar = get('special-char');
const upperCase = get('upperCase');
const passwordLength = get('passwordLength');
const button = document.querySelector('button');
const errorMessage = document.querySelector('.error-message');
const passwords = document.querySelectorAll('.input--password');

const randomItem = (arr) => arr[Math.floor(Math.random() * arr.length || 0)];

const generateString = (howLong) =>
  Array(howLong)
    .fill('')
    .map(() => Math.random().toString(36).charAt(2));

function randomChar() {
  const randomNumber = Math.round(126 - Math.random() * 93);
  const char = String.fromCharCode(randomNumber);
  return char;
}

function makePassword(passwordLength, word) {
  const arrayOfChar = generateString(+passwordLength);
  const arrayOfNum = [];
  const Num = Math.floor(Math.random() * arrayOfChar.length || 0);
  let text = word;

  for (let i = 0; i < passwordLength; i++) {
    arrayOfNum.push(i);
  }

  if (upperCase.value === '1' && specialChar.value === '1') {
    for (let i = 0; i < passwordLength; i++) {
      text += randomChar(passwordLength);
    }
  } else if (upperCase.value === '1' && specialChar.value === '0') {
    const item = randomItem(arrayOfChar);
    const item2 = randomItem(arrayOfChar);
    for (let i = Num; i < passwordLength; i++) {
      arrayOfChar.splice(arrayOfChar.indexOf(item), 1, item2.toUpperCase());
    }
    text += arrayOfChar.join('');
  } else {
    text += arrayOfChar.join('');
  }
  return text;
}

function generatePassword() {
  const word = '';
  errorMessage.classList.remove('visibility');
  if (passwordLength.value <= 0) {
    return displayErrorMessage();
  }
  if (passwordLength.value > 20) {
    return displayErrorLengthMessage();
  }
  passwords.forEach((password) => (password.value = makePassword(passwordLength.value, word)));
}

function displayErrorMessage() {
  errorMessage.classList.add('visibility');
  errorMessage.classList.remove('message');
  errorMessage.textContent = 'Password must have at last one character';
}

function displayErrorLengthMessage() {
  errorMessage.classList.add('visibility');
  errorMessage.classList.remove('message');
  errorMessage.textContent = 'Password will cause problems if more than 20 characters long';
}

function copyMessage() {
  errorMessage.classList.add('visibility');
  errorMessage.classList.add('message');
  errorMessage.textContent = 'Password copied';
}

function copyToClipboard() {
  this.select();
  this.setSelectionRange(0, 99999);

  navigator.clipboard.writeText(this.value);

  if (this.value !== '') {
    copyMessage();
  }
}

button.addEventListener('click', generatePassword);

passwords.forEach((password) => {
  password.addEventListener('click', copyToClipboard);
});

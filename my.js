function generatePassword() {
  let firstInput = document.getElementById("firstPassword");
  let secondInput = document.getElementById("secondPasword");
  let thirdInput = document.getElementById("thirdPasword");
  let fourthInput = document.getElementById("fourthPasword");
  let messege = document.getElementById("message");

  let length = document.getElementById("passworLength").value;
  console.log(length);

  // let password = "";
  // let password = " ";
  let password;

  let randomNumber;
  let char;

  function makePassword(length, word) {
    if (length <= 0) {
      return 1;
    } else {
      randomNumber = Math.floor(99 - Math.random() * 66);
      char = String.fromCharCode(randomNumber);
      word += char;
      console.log(word);
      return makePassword(length - 1);
    }
  }

  // console.log(length);

  // console.log(char);

  firstInput.value = makePassword(length, password);
  secondInput.value = makePassword(length);
  console.log(password);
}

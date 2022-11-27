// Assignment Code
var generateBtn = document.querySelector("#generate");
var clickSelect = document.querySelector("#password");

var pwLength;
var verifyLower;
var verifyUpper;
var verifyNumber;
var verifySpecial;
var userSelect;

var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = lowerCase.map(lowerCase => lowerCase.toUpperCase());

var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var special = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Select all characters when generated password is clicked
function clickSelectAll(){
  document.querySelector("#password").focus();
  document.querySelector("#password").select();
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Add event listener to focus on generated password
clickSelect.addEventListener("focus", clickSelectAll);


//Function to generate password
function generatePassword() {
  //Start user input
  pwLength = prompt("Please choose a character length between 8 and 128 for your password");

  if(!pwLength){
    alert("It is required to choose a length");
  } else if (pwLength < 8 || pwLength > 128) {
    pwLength = prompt("Uh Oh! Please choose between 8 and 128");
  } else {
    verifyLower = confirm("Would you like lower case letters?");
    verifyUpper = confirm("Would you like UPPER CASE letters?");
    verifyNumber = confirm("Would you like to include numbers");
    verifySpecial = confirm("Would you like special characters?");
  };

  //If user selects 'cancel' for all opitons
  if(!verifyLower && !verifyUpper && !verifySpecial) {
    userSelect = alert("Please choose password criteria");
  } 
  //If user selects to have all options
  else if (verifyLower && verifyUpper && verifyNumber && verifySpecial) {
    userSelect = lowerCase.concat(upperCase, numbers, special);
    } 
  //If user selects 3 out of 4 options
  else if (verifyLower && verifyUpper && verifyNumber) {
    userSelect = lowerCase.concat(upperCase, numbers);
  } else if (verifyLower && verifyUpper && verifySpecial) {
    userSelect = lowerCase.concat(upperCase, special);
  } else if (verifyLower && verifyNumber && verifySpecial) {
    userSelect = lowerCase.concat(numbers, special);
  } else if (verifyUpper && verifyNumber && verifySpecial) {
    userSelect = upperCase.concat(numbers, special);
  }
  
  //If user selects 2 out of 4 options
  else if (verifyLower && verifyUpper) {
    userSelect = lowerCase.concat(upperCase);
  } else if (verifyLower && verifyNumber) {
    userSelect = lowerCase.concat(numbers);
  } else if (verifyLower && verifySpecial) {
    userSelect = lowerCase.concat(special);
  } else if (verifyUpper && verifyNumber) {
    userSelect = upperCase.concat(numbers);
  } else if (verifyUpper && verifySpecial) {
    userSelect = upperCase.concat(special);
  } else if (verifyNumber && verifySpecial) {
    userSelect = numbers.concat(special);
  }
  //If user selects 1 out of 4 options
  else if (verifyLower) {
    userSelect = lowerCase;
  } else if (verifyUpper) {
    userSelect = upperCase;
  } else if (verifyNumber) {
    userSelect = numbers;
  } else if (verifySpecial) {
    userSelect = special;
  };

  var pwDefault = [];

  for (var i = 0; i < pwLength; i++) {
    var allChoices = userSelect[Math.floor(Math.random() * userSelect.length)];
    pwDefault.push(allChoices);
  }

  var password = pwDefault.join("");
  return password;


}

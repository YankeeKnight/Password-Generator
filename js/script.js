// Assignment Code
var generateBtn = document.querySelector("#generate");

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

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//Function to generate password
function generatePassword() {
  //Start user input
  pwLength = prompt("Please choose a character length between 8 and 128 for your password");
  console.log("Password length: " + pwLength);

  if(!pwLength){
    alert("It is required to choose a length");
  } else if (pwLength < 8 || pwLength > 128) {
    pwLength = prompt("Uh Oh! Please choose between 8 and 128");
    console.log("Password length: " + pwLength);
  } else {
    verifyLower = confirm("Would you like lower case letters?");
    console.log("Lower case: " + verifyLower);
    verifyUpper = confirm("Would you like UPPER CASE letters?");
    console.log("Upper case: " + verifyUpper);
    verifyNumber = confirm("Would you like to include numbers");
    console.log("Number: " + verifyNumber);
    verifySpecial = confirm("Would you like special characters?");
    console.log("Special characters: " + verifySpecial);
  };

  

  var pwDefault = [];

  for (var i = 0; i < pwLength; i++) {
    var allChoices = userSelect[Math.floor(Math.random() * userSelect.length)];
    pwDefault.push(allChoices);
    console.log(allChoices);
  }

  var password = pwDefault.join("");
  console.log("Your Password is: " + password);
  return password;


}

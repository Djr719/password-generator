// Assignment Code
var generateBtn = document.querySelector("#generate");


var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var special = ['@', '%', '+', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'
]; 
var length = (x>==8)+(x<==128);
var x = 8;

length = prompt("Please enter your password length. Password must be between 8 and 128 characters.");
  if (numberOfCharacters < 8 || numberOfCharacters > 128) {
    errorObj.message("Error- Password must be between 8 and 128 characters") };
 
 hasupperCase = prompt("Would you like to add upperCase letters?");
 if (upperCase) {var upperCase = alert("Password will have uppercase letters.")};
 
 haslowerCase = prompt("Would you like lowercase letters?");
 if (lowerCase) {var lowerCase = alert("Password will have lowercase letters.")};

 hasnumbers = prompt("Would you like to include numbers?");
 if (numbers) {var numbers = alert("Password will have numbers.")};

 hasspecial = prompt("Would you like to add special characters?");
 if (special) {var special = alert("Password will have special characters.")};

 if (haslowerCase === false && hasupperCase === false && hasnumbers === false && hasspecial === false) {
  errorObj.message("Error- password must have one character type.");
};
if (haslowerCase) {
  possibleCharacters = possibleCharacters.concat(lowerCase);
}
if (hasupperCase) {
  possibleCharacters = possibleCharacters.concat(upperCase);
}
if (hasnumbers) {
  possibleCharacters = possibleCharacters.concat(numbers);
}
if (hasspecial) {
  possibleCharacters = possibleCharacters.concat(special);
}
let finalPassword = ""
  for (let i = 0; i < length; i++) {
    let rng =[Math.floor(Math.random() * possibleCharacters.length)];

    finalPassword = finalPassword + possibleCharacters[rng];
  }
  return {finalPassword;
};
    
  

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
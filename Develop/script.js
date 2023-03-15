// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword (){
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var special = ['@', '%', '+', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'
]; 


characters = prompt("Please enter your password length. Password must be between 8 and 128 characters.");
  if (characters < 8 || characters > 128) {
   return errorObj.message("Error- Password must be between 8 and 128 characters") };
 
 upperCase = confirm("Would you like to add upperCase letters?");
 if (upperCase) {upperCase = alert("Password will have uppercase letters.")};
 
 lowerCase = confirm("Would you like lowercase letters?");
 if (lowerCase) {lowerCase = alert("Password will have lowercase letters.")};

 numbers = confirm("Would you like to include numbers?");
 if (numbers) {numbers = alert("Password will have numbers.")};

 special = confirm("Would you like to add special characters?");
 if (special) {special = alert("Password will have special characters.")};

 if (lowerCase === false && upperCase === false && numbers === false && special === false) {
  return errorObj.message("Error- password must have one character type.");
};
if (lowerCase) {
  length = length.concat(lowerCase);
}
if (upperCase) {
  length = length.concat(upperCase);
}
if (numbers) {
  length = length.concat(numbers);
}
if (special) {
  length = length.concat(special);
}
var finalPassword = ""
  for (let i = 0; i < length; i++) {
    let rng =[Math.floor(Math.random() * length.length)];

    finalPassword = finalPassword + length[rng];
  }
  return {finalPassword
};
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
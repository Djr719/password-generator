// Assignment Code
var generateBtn = document.querySelector("#generate");


var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var special = ['@', '%', '+', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'
]; 


function questions() {
  var isValid = false;
  do {
    var length = prompt(Choose password length between 8 and 128 characters);
    var responses = {
      length: '8-128',  
      special:special, 
      numbers:numbers, 
      upperCase:upperCase, 
      lowerCase:lowerCase
    } 
    if((length < 8)||(length > 128))
    alert("Choose number between 8 and 128");
    else
    isValid = true;

  } while(!isValid);
  return responses;
}
// This function joins all the user responses and then creates the result - a strong password.
function generatePassword() {
  var passwordOptions = upperCase; lowerCase; numbers; special
  var possibleCombo = [];
  var finalPassword = "";



  if (passwordOptions.Numbers) {
    for (var i of numbers)
      possibleCombo.push(i);
  }
  if (passwordOptions.LowerCase) {
    for (var i of lowerCase)
      possibleCombo.push(i);
  }
  if (passwordOptions.UpperCase) {
    for (var i of upperCase)
      possibleCombo.push(i);
  }
  if (passwordOptions.Special) {
    for (var i of special)
      possibleCombo.push(i);
  }


  console.log(possibleCombo);


  for (var i = 0; i < passwordOptions.length; i++) {
    finalPassword += possibleCombo[Math.floor(Math.random() * possibleCombo.length)];
    
  }
  console.log(Password);

  return Password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
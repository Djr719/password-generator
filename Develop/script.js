// added function to generate password
function generatePassword() {
  // added array of characters for the password to choose from
  var number = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  var special = ['@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];
  var possibleChoices = [];

  // 
  characters = prompt("How many characters do you want in your password? Choose between 8 to 128 characters.");
  if (characters < 8 || characters > 128) {
    alert ("Please choose a valid number between 8 and 128.");
    return "Invalid"
  } else if (isNaN(characters)) {
    alert("You must enter a number.");
    return "Error"
  }
  else {
    alert("Your password will be " + characters + " characters long.");
    
  }

  yesUpperCase = confirm("Do you want uppercase letters?");
  if (yesUpperCase) {
    var turnToupperCase = alert("Uppercase letters have been selected.");
  }
  else {
    alert("Uppercase letters have not been selected.");
  }

  yesLowerCase = confirm("Do you want lowercase letters?");
  if (yesLowerCase) {
    alert("Lowercase letters have been selected.");
  }
  else {
    alert("Lowercase letters have not been selected.");
  }

  yesNumbers = confirm("Do you want to use numbers?");
  if (yesNumbers) {
    alert("Numbers have been selected.");
  }
  else {
    alert("Numbers have not been selected.");
  }

  yesSpecial = confirm("Do you want special characters?");
  if (yesSpecial) {
    alert("Special characters have been selected.");
  }
  else {
    alert("Special characters have not been selected.");
  }

  if (yesLowerCase === false && yesUpperCase === false && yesNumbers === false && yesSpecial === false) {
    alert("One character type must be selected to generate password.");
    return "Error"
  };

  // Used "if" functon and "concat"
  if (yesUpperCase) {
    possibleChoices = possibleChoices.concat(upperCase);
  }
  if (yesLowerCase) {
    possibleChoices = possibleChoices.concat(lowerCase);}
  if (yesNumbers) {
    possibleChoices = possibleChoices.concat(number);
  }
  if (yesSpecial) {
    possibleChoices = possibleChoices.concat(special);
  }

  // Loop to generate password based on criteria
  let finalPassword = ""
  for (let i = 0; i < characters; i++) {
    let rng =[Math.floor(Math.random() * possibleChoices.length)];
    finalPassword = finalPassword + possibleChoices[rng];
  }
  alert ("Click 'OK' to generate password.")
  return finalPassword;
 

}
// Assignment code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
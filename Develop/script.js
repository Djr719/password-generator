function generatePassword() {
  var number = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  var special = ['@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];
  var possibleChoices = [];

  // get input and validate
  characters = prompt("How many characters do you want in your password? Choose between 8-128 characters.");
  if (characters < 8 || characters > 128) {
    return "Please choose a valid number of characters.";
  } else if (isNaN(characters)) {
    characters = prompt("Please enter a valid number.");
  }
  else {
    alert("Your password will be " + characters + " characters long.");
    
  }

  yesLowercase = confirm("Do you want lowercase characters?");
  if (yesLowercase) {
    var turnToLowercase = alert("Your password will have lowercase characters.");
  }
  else {
    alert("Your password will NOT have lowercase characters.");
  }

  yesupperCase = confirm("Do you want uppercase characters?");
  if (yesupperCase) {
    alert("Your password will have uppercase characters.");
  }
  else {
    alert("Your password will NOT have uppercase characters.");
  }

  yesNumbers = confirm("Do you want to use numbers?");
  if (yesNumbers) {
    alert("Your password will have numbers.");
  }
  else {
    alert("Your password will NOT have numbers.");
  }

  yesSpecial = confirm("Do you want special characters?");
  if (yesSpecial) {
    alert("Your password will have special characters.");
  }
  else {
    alert("Your password will NOT have special characters.");
  }

  if (yesLowercase === false && yesupperCase === false && yesNumbers === false && yesSpecial === false) {
    return "Please select at least one character type.";
  };

  // group selected characters
  if (yesLowercase) {
    possibleChoices = possibleChoices.concat(lowerCase);
  }
  if (yesupperCase) {
    possibleChoices = possibleChoices.concat(upperCase);
  }
  if (yesNumbers) {
    possibleChoices = possibleChoices.concat(number);
  }
  if (yesSpecial) {
    possibleChoices = possibleChoices.concat(special);
  }

  // pick random cards out of new pool for length of password
  let finalPassword = ""
  for (let i = 0; i < characters; i++) {
    let rng =[Math.floor(Math.random() * possibleChoices.length)];
    // or finalPassword += possibleChoices[rng];
    finalPassword = finalPassword + possibleChoices[rng];
  }
  return finalPassword;
};

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
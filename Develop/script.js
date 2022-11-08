// Assignment code here

// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page











let pwLength = document.getElementById('pwLength').value;


let lowerChar = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
let upperChar = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
let nums = [ '0', '1', '2', '3', '4', '5', '6', '7', '8', '9',]
let specialChar = [ '!', '#', '$', '%', '&', '(', ',', ')', '*', '+','-','.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '\', ', '^_`{' , '|', '}', '~']


let userChoice = ( lowerChar + upperChar + nums + specialChar);
console.log(userChoice);



console.log(pwLength.length);
console.log(pwLength.value);





function generatePassword() {
  let password = '';
  let userChoices = document.getElementsByTagName("input");
  let randomCharTypes = []
  for (var i = 0; i < userChoices.length) {
    if (userChoices[i].checked) {
      randomCharTypes.append(userChoices[i].id);
    }
  }

  // loop to add Random Characters together
  for(var i = 0; 1 < pwLength; i++) {
    ...
  }
  document.getElementById('password').value = password;
} 
















// // Get references to the #generate element

// var generateBtn = document.querySelector("#generate");

// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);



// function getRandomcChars(type) {
//   let upper_letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
//   let lower_letters = 'abcdefghijklmnopqrstuvwxyz';
//   let random_letter_index = Math.floor(Math.random() * 25);
//   let special_chars = ` !"#$%&'()*+,-./:;<=>?@[\]^_\`\{|\}~`;
//   let random_special_chars_index = Math.floor(Math.random() * special_chars.length)
//   let char_set = {
//     'upper': upper_letters.charAt(random_letter_index),
//     'lower': lower_letters.charAt(random_letter_index),
//     'special': special_chars.charAt(random_special_chars_index),
//     'numeric': Math.floor(Math.random() * 10)
//   };
//   return char_set[type].toString();
// }


// //Allows user to set permitted character length and type elements to be input in to the  
// //function to create a password. 
// function generatePassword() {
//  let password_length = document.getElementById("length").value;
//  let permitted_char_types = [];
//  let checkboxes = document.getElementsByTagName("checkbox");
//  for(let i = 0; i < checkboxes.length; i++) {
  
//  }
//  let password = '';
//  while (password.length < password_length) {
//     let random_char_type_index = Math.floor(Math.random() * permitted_char_types.length)
//     let char_type = permitted_char_types[random_char_type_index];
//     password += getRandomChars(char_type);
//  }
//  return password;
// }

// console.log("password");

// //Gets value of passwrod element and pastes to clipboard
// function copyText() {
//   let copyText = document.getElementById("password");

//   copyText.select();
//   copyText.setSelectionRange(0, 99999);

//   navigator.clipboard.writeText(copyText.value);

//   alert("Copied the text: " + copyText.value);

// }




// var values = [];
// var cbs = document.forms['test'].elements['colors'];
// for(var i=0,cbLen=cbs.length;i<cbLen;i++){
//   if(cbs[i].checked){
//     values.push(cbs[i].value);
//   } 
// }
// alert('You selected: ' + values.join(', '));

// console.log(random_letter_index)


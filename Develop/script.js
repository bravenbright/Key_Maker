
let lowerChar = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
let upperChar = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
let specialChar = [ '!', '#', '$', '%', '&', '(', ',', ')', '*', '+','-','.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '\', ', '^', '{' , '|', '}', '~']




// this function generates the password by generating loops to access the value of the 
// arrays above by randomizing a random selectionselection 
function generatePassword() {
  let pwLength = document.getElementById('pwLength').value;
  let password = '';
  let userChoices = document.getElementsByTagName("input");
  let randomCharTypes = []
  for (var i = 0; i < userChoices.length; i++) {
    if (userChoices[i].checked) {
      randomCharTypes.push(userChoices[i].id);
    }
  }
  
  // loop to add Random Character Types together and then 
  // loop through to select a character to add to the string to generate the password
  for(var i = 0; i < pwLength; i++) {
    let randomIndex = Math.floor(Math.random() * randomCharTypes.length); 
    let randomCharType = randomCharTypes[randomIndex];
    console.log(randomCharType);
    console.log(lowerChar);
    if(randomCharType == 'lower_char') {
      password += lowerChar[Math.floor(Math.random() * 25)];
    } else if(randomCharType == 'upper_char') {
      password += upperChar[Math.floor(Math.random() * 25)];
    } else if(randomCharType == 'nums') {
      password += Math.floor(Math.random() * 10);
    } else if(randomCharType == 'special_char') {
      password += specialChar[Math.floor(Math.random() * 26)];
    }
  }
  document.getElementById('password').value = password;
} 

//Gets value of passwrod element and pastes to clipboard
function copyText() {
  let copyText = document.getElementById("password");

  copyText.select();
  copyText.setSelectionRange(0, 99999);

  navigator.clipboard.writeText(copyText.value);

  alert("Copied the text! ");

}


// Assignment Code
var generateBtn = document.querySelector("#generate");
var endPass="";
// Write password to the #password input
generateBtn.addEventListener("click", generatePassword)

function generatePassword() {
  var passLength = prompt ("How many characters (8-128) do you want in the password?")
  if (passLength <8 || passLength > 128 ) {
    alert("Please enter a number between 8-128")
    generatePassword();
  } else {
    var charUpper = confirm ('Would you like any letters to be capital letters?');
    var charNum = confirm ('Would you like any numbers in your password?');
    var charSpec = confirm ('Would you like any special characters in your password?');

    writePassword();

  }

  function writePassword() {
    var alphaLower = "abcdefghijgklmnopqrstuvwxyz";
    var alphaUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var numbs = "0123456789";
    var chars = "!@#$%^&*()_+:;?<>,./-+=";
    var codeSpec = alphaLower;


    if (charUpper) {
      codeSpec = codeSpec + alphaUpper
   } 
    if (charNum) {
      codeSpec = codeSpec + numbs
   } 
    if (charSpec) {
    codeSpec = codeSpec + chars
   }


  console.log("These are your code options " + codeSpec);
  console.log (codeSpec.length);
  console.log (passLength);
  for (var i = passLength; i > 0; i--) {
    endPass = endPass + codeSpec[Math.floor(Math.random() * codeSpec.length-1)];
  

  
  
  }  
  
  var passwordText = document.querySelector("#password");

  passwordText.value = endPass;

  

}
};

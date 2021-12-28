// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword(){
// wirte all code here.

//pseudocode
//1. Present user series of prompts/confirms
  // let sign = prompt("Whats your sign?")
  //length prompt - var lengthChoice
     // confirm("press a button!")
  //lower confirm - var lowerChoice
  // upper confirm - var upperChoice
  // nums confirm - var numsChoice
  // special confirm - var spcChoice
//2. Length prompt / number between 8-128
  // if conditional to check if length is between 8-128
    // if true, continue to confirm, if false ask for lenght again
      // var lengthChoice = prompt("Please choose a length between 8-128 characters.")
//confirm for lower, upper , nums and special
//3. Input validation - correct nums atleast 1 character chosen
  // if/ conditional check using || (or), if false ask again
//4. Randomly generate password string from choices
  // arrays of lower, upper, nums and special
  // array of all chosen characters (concat)
  // choose from all options array number of characters required(length prompt)
    //for loop, run based on length prompt
    //Math.random choose index positions from array
      // var foodItems = [array]
      // var theFood = foodItmes [Math.floor(Math.random( * foodItmes.Length))]
    //make new array from randomly chosen characters(methods)
    // convert array to string(method)
    // return string (alert with password to the screen)
//5. display password in text box- write in page

var lengthChoice = prompt("Please choose a length between 8-128 characters.")
console.log("Lenght " + lengthChoice)
if (7 < lengthChoice && lengthChoice < 129) {
  var lowerChoice = confirm("Do you want lower case letters in your password?")
  console.log("lowercase " + lowerChoice)
  var upperChoice = confirm("Do you want upper case letters in your password?")
  console.log("Upper choice " + upperChoice)
  var numChoice = confirm("Do you want numbers in your password?")
  console.log("number choice " + numChoice)
  var spcChoice = confirm("Do you want special characters in your password?")
  console.log("special " + spcChoice)

  if (lowerChoice || upperChoice || numChoice || spcChoice) {
    var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
    var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
    var spcChar = ["~","!","@","#","$","%","^","&","*","(",")","_",":",";"]
    var numChar = ["0","2","3","4","5","6","7","8","9"]

    var finalChoices = []

    if (lowerChoice) {
      finalChoices = finalChoices.concat(lowerCase);
    }
    if (upperChoice) {
      finalChoices = finalChoices.concat(upperCase);
    }
    if (spcChoice) {
      finalChoices = finalChoices.concat(spcChar);
    }
    if (numChoice) {
      finalChoices = finalChoices.concat(numChar);
    }
    console.log(finalChoices)
    var finalChoicesLength = finalChoices.length;
    console.log(finalChoicesLength)
    var passwordString = []

    for(i = 0; i<lengthChoice ;i++){

      var randomPick = finalChoices[Math.floor(Math.random() * finalChoicesLength)]
      var passwordString = passwordString.concat(randomPick);
    }
    console.log(passwordString)
    return passwordString.join("");

  } else {
    alert("Need at least one character type.")
    generatePassword();
  }
} else if (lengthChoice == null){

} else
  generatePassword();
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

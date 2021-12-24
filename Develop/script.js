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
//Present user series of prompts/confirms
  // let sign = prompt("Whats your sign?")
  //length prompt - var lengthChoice
  var lengthChoice = prompt("Please choose a length between 8-128 characters.")
  console.log("length " + lengthChoice)
  // confirm("press a button!")
  //lower confirm - var lowerChoice
  var lowerChoice = confirm("Do you want lower case letters in your password?")
  console.log("lowercase " + lowerChoice)
  // upper confirm - var upperChoice
  var upperChoice = confirm("Do you want upper case letters in your password?")
  console.log("Upper choice " + upperChoice)
  // nums confirm - var numsChoice
  var numChoice = confirm("Do you want upper case letters in your password?")
  console.log("number choice " + numChoice)
  // special confirm - var spcChoice
  var upperChoice = confirm("Do you want upper case letters in your password?")
  console.log("lowercase " + upperChoice)
//Length prompt / number between 8-128
  // if conditional to check if length is between 8-128
    // if true, continue to confirm, if false ask for lenght again
//confirm for lower, upper , nums and special
//Input validation - correct nums atleast 1 character chosen
  // if/ conditional check using || (or), if false ask again
//Randomly generate password string from choices
  // arrays of lower, upper, nums and special
  // array of all chosen characters (concat)
  // choose from all options array number of charachters required(length prompt)
    //for loop, run basedd on length prompt
    //Math.random choose index positions from array
      // var foodItems = [array]
      // var theFood = foodItmes [Math.floor(Math.random( * foodItmes.Length))]
    //make new array from randomly chosen characters(methods)
    // convert array to string(method)
    // return string (alert with password to the screen)
//display password in text box- write in page

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

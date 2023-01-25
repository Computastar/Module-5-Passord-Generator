// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function to prompt user for password options
function getPasswordOptions() {

}

// Function for getting a random element from an array
function getRandom(arr) {

}

// Function to generate password with user input
function generatePassword() {

}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
//generateBtn.addEventListener('click', writePassword);

$(function () {
  var dialog, form,

      pwdLength = $("pwdLength"),
      lowerCase = $("lowerCase"),
      upperCase = $("upperCase"),
      numeric = $("numeric"),
      specialChar = $("specialChar")
      allFields = $([]).add(pwdLength).add(lowerCase).add(upperCase).add(numeric).add(specialChar);
   


  $( "#slider-range-max" ).slider({
  range: "max",
  min: 10,
  max: 128,
  value: 10,
  slide: function( event, ui ) {
  $( "#pwdLength" ).val( ui.value );
  }
  });
  $( "#pwdLength" ).val( $( "#slider-range-max" ).slider( "value" ) );


  dialog = $("#dialog-form").dialog({
      autoOpen: false,
      height: 410,
      width: 350,
      modal: true,
    
      buttons: {
          "Lets Go...": getPasswordOptions,
          Cancel: function () {
              dialog.dialog("close");
          }
      },
      close: function () {
          form[0].reset();
          allFields.removeClass("ui-state-error");
      }
  });

  form = dialog.find("form").on("submit", function (event) {
      event.preventDefault();
      addPasswordParameters();
  });

  $("#createPasswordParameters").button().on("click", function () {
      dialog.dialog("open");
  });
});
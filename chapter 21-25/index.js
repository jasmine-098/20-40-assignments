//// String Methods 

// Question 1:

// var fName = prompt("Enter your first name?");

// var lName = prompt("Enter your last name?");
// var fullName = fName + " " + lName;
// alert("Hello, " + fullName + "!");


// Question 2:

// var userInput = prompt("What is your favourite Mobile phone model?");
// document.write('My favorite phone is: ' + userInput + "<br>");
// document.write("Length of string: " + userInput.length);


// Question 3:

// var country = "Pakistani";
// var indexOfN = country.indexOf('n');
// document.write("String: " + country + "<br>");
// document.write("Index of 'n': " + indexOfN);

// Question 4:

// var word = "Hello World";
// var lastIndexOfL = word.lastIndexOf('l');
// document.write("String: " + word + "<br>");
// document.write("last Index of 'l': " + lastIndexOfL);

// Question 5:

// var country = "Pakistani";
// var indexOfI = country.indexOf('i'); 
// document.write("String: " + country + "<br>");
// document.write("Index of 'i': " + indexOfI);

// Question 6:




// Question 7:

// var city = "Hyderabad";
// var newcity = city.replace("Hyderabad", "Ialamabad");
// document.write("City: " + city + "<br>" );
// document.write("After replacement: " + newcity );


// Question 8:

// var userInput =  "Ali and Sami are best friends. They play cricket and foot ball together.";
// console.log("Var message:   " + UserInput);

// Question 9:

// var stringValue = "472";
// document.write("Value:" + stringValue + "<br>");
// document.write("Type: " + typeof stringValue + "<br>");
// var numValue = Number (stringValue);
// document.write("Value: " + numValue + "<br>");
// document.write("Type: " + typeof numValue);


// Question 10:

//  var userInput = "Peanuts";
// document.write("UserInput: " + userInput +  "<br>" );
// var userInput = prompt("Enter the item to search :");
//  var upperCaseInput = userInput.toUpperCase();
//  document.write("Upper case: " + upperCaseInput);


// Question 11:

// var userInput = "Java Script";
// document.write("User Input: " + userInput + "<br>");
// var userInput = "java script";
// document.write("Tittle Case: " + userInput);


// Question 12:

// var number = '35.36';
// var numberstring = number.toString().replace(".",  "");
// document.write("Number: ", + number + "<br>");
// document.write("result: " + numberstring);

// Question 13:

// var userName = prompt("Enter your username?");
// var invalidCharacters = ["@", ",", ".", "!"]; 
// for (var i = 0; i < invalidCharacters.length; i++) {
//     if (userName.includes(invalidCharacters[i])) { 
//         alert("Please enter a valid username");
//         break; 
//     }
// }

// Question 14:

// var items = ["cake", "apple pie", "cookie", "chips", "patties"];
// var userInput = prompt("Enter the item to search:").toLowerCase();
// if (items.includes(userInput)) {
//     alert(userInput + "Is available");
// }
// else {
//     alert(userInput + " is not available");
// }
// var A = ["cake", "apple pie", "cookie", "chips", "patties"];
//  var userInput = prompt("Welcome to my bakery What do you want to order ").toLowerCase();
//  userInput = userInput.toLowerCase();
//  var itemIndex = A.indexOf(userInput);

//  if (itemIndex !== -1) {
//    alert(userInput + " is available at index " + itemIndex + " in our bakery");
//  } else {
//    alert("We are sorry, " + userInput + " is not available in our bakery");
//  }

// Question 15:

// var takePassword = prompt("Enter your Password?");
// var hasLetter = false;
// var hasNumber = false;
// var firstCharCode = takePassword.charCodeAt(0);

// if (takePassword.length < 6) {
//     alert("Password is too short, it must be at least 6 characters.");
// } 

// else if (firstCharCode >= 48 && firstCharCode <= 57) {
//     alert("Do not use a number at the beginning of the password.");
// } 

// else {
//     for (var i = 0; i < takePassword.length; i++) {
//         var charcode = takePassword.charCodeAt(i);

//         if ((charcode >= 65 && charcode <= 90) || (charcode >= 97 && charcode <= 122)) {
//             hasLetter = true;
//         }
        
//         if (charcode >= 48 && charcode <= 57) {
//             hasNumber = true;
//         }
//     }

//     if (!hasLetter || !hasNumber) {
//         alert("Password must contain both letters and numbers.");
//     } else {
//         alert("Password is valid.");
//     }
//   }


// Question 16:

//  var university = "University of Karachi";
//  var universityArray = university.split(" "); 
//  for (var i = 0; i < universityArray.length; i++) {
//      console.log(universityArray[i]);
//  }

 
// Question 17:

// var userInput = "pakistan";
// document.write("Pakistan: " , "<br>" );
// var userInput = prompt("Enter a string?");
// var lastChar = userInput.charAt(userInput.length - 1);
// document.write("Last character of input is: " + lastChar);


// Question 18:

// var text = "The quick brown fox jumps over the lazy dog";
// var word = "the";

// text = text.toLowerCase();
// word = word.toLowerCase();

// var count = (text.match(new RegExp("\\b" + word + "\\b", "g")) || []).length;

// document.write("Text: " + text);
// document.write("There are " + count + " occurrence(s) of the word '" + word + "'.");






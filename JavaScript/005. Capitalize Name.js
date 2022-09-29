var myName = prompt("name pls hehe"); // Input the name thru prompt.
var firstChar = myName.slice(0,1); // Slice and store the first character.
var firstCharUpperCase = firstChar.toUpperCase(); // Convert the first character to uppercase.
var secondPart = myName.slice(1,myName.length); // Slice and store the rest of the word.
var secondPartLowerCase = secondPart.toLowerCase(); // Convert the rest of the word to lower case.
alert("Hey, " + firstCharUpperCase + secondPartLowerCase + "!"); // Concatenate and display.
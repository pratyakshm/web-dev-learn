var firstName = prompt("Your name:");
var lastName = prompt("Your crush's name:");
var loveScore = Math.round((Math.random() * 100));
if (loveScore > 30 && loveScore <= 70) {
    alert("Chances between " + firstName + " 💖 " + lastName + " are: " + loveScore + "%" + "You are a good match!");
}
else if (loveScore > 70) {
    alert("Chances between " + firstName + " 💖 " + lastName + " are: " + loveScore + "%" + "You are a perfect match!");
}
else {
    alert("Chances between " + firstName + " 💖 " + lastName + " are: " + loveScore + "%" + "Bad luck!");
}
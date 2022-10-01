function isLeap(year) {
    if (year % 4 == 0) {
        if (year % 100 == 0) {
            if (year % 400 == 00) {
                alert("Leap Year");
            }
            else {
                alert("Not leap year.");
            }
        }
        else {
            alert("Leap Year.");
        }
    }
    else {
        alert("Not leap year.");
    }
}
year = prompt("Enter year: ");
isLeap(year);
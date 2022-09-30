function howManyBottles(money){
    console.log("Calculating...");
    // cost of one bottle is 1.5
    // need to calculate: total no of bottles
    // one bottle costs 1.5 INR
    // var bottles = Math.floor(money/1.5);
    console.log("You can buy " + calcBottles(money,1.5) + " bottles with " + money + " units of money.");
    return money/1.5;
}
var change = howManyBottles(4);
console.log("Change: "+ change);

function calcBottles(startingMoney, costPerBottle) {
    var numberOfBottles = Math.floor(money/costPerBottle);
    return numberOfBottles;
}


getMilk(5)
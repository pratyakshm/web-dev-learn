function bmiCalculator(weight,height) {
    return Math.round(weight / Math.pow(height,2));
}
var bmi = bmiCalculator(65, 1.8);
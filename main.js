// Exercise 1
var x = 2;
var answer = document.getElementById("valX");
var inputBox1 = document.getElementById("num1");
var inputBox2 = document.getElementById("num2");

function square(c) {
    return c * c;
}

function add() {
    c = Number(inputBox1.value);
    b = Number(inputBox2.value);
    answer.innerHTML = (c + b).toString();
}

// Exercise 2
var averageValue = document.getElementById("averageValue");
var inputBoxes = document.getElementsByClassName("ave");
function average(){
    var sum = 0;
    console.log(inputBoxes)
    for (var i = 0; i < inputBoxes.length; i++){
        sum += Number(inputBoxes[i].value);
        console.log(Number(inputBoxes[i].value));
    }
    averageValue.innerText = (sum / 5).toString();
}




// Exercise 3

function sd() {
    var numbers = [];
    for (var i = 0; i < inputBoxes.length; i++){
        numbers.push(Number(inputBoxes[i].value));
    }
    var sd = standardDeviation(numbers);
    averageValue.innerText = sd.toString();
}

function standardDeviation (nums) {
    var myAverage = mean(nums);
    // console.log("Mean: " + myAverage);
    var squareDifferenceResult = squareDifference(nums, myAverage)
    // console.log("Squared squareDifference: " + squareDifferenceResult);
    var averageOfSquaredDifference = mean(squareDifferenceResult);
    // console.log("Average of SquaredDifference: " + averageOfSquaredDifference);
    var sqrtValue = Math.sqrt(averageOfSquaredDifference);
    // console.log("Standard Deviation: " + sqrtValue);
    return sqrtValue;
}

function mean(nums){
    var count = nums.length;
    var sum = 0;
    for (var i = 0; i < nums.length; i++){
        sum += nums[i];
    }
    return sum/nums.length;
}

function squareDifference(nums, mean) {
    var outputArray = [];

    for (var i=0 ; i < nums.length; i++){
        var squareDiff = square(nums[i] - mean);
        outputArray.push(squareDiff);
    }

    return outputArray;
}



var textAreaNumbers = document.getElementById("numbersTextArea");
var sdResult = document.getElementById("standardDeviationResult");
var meanResult = document.getElementById("meanResult");
function sdTextArea() {
    console.log("calculating text area standard deviation. ");
    console.log(textAreaNumbers.value);
    var afterSplit = textAreaNumbers.value.split(","); // array of string 
    console.log(afterSplit);
    var numbers = []; // container for array of numbers
    for (var i = 0; i < afterSplit.length; i++){
        numbers.push(Number(afterSplit[i].trim()));
    }
    var sd = standardDeviation(numbers);
    sdResult.innerText = sd.toString();

    var m = mean(numbers);
    meanResult.innerText = m.toString();
}
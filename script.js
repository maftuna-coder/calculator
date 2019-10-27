//Function to get values from text input
getValues = function () {
    number1 = document.getElementById("number1").value;
    number2 = document.getElementById("number2").value;
    resultObject = {
        "number1": number1,
        "number2": number2
    }
    return resultObject;
}

//Function to set the display text
showResult = function (result) {
    resultElement = document.getElementById("result");
    resultElement.innerText = result;
}

//Plus operation
plusButton = document.getElementById("plusButton");
plusOperation = function () {
    numberValues = getValues();
    sum = parseInt(numberValues.number1) + parseInt(numberValues.number2);
    showResult(sum);
}

plusButton.addEventListener("click", plusOperation);

//Minus operation
minusButton = document.getElementById("minusButton");
minusOperation = function () {
    numberValues = getValues();
    difference = parseInt(numberValues.number1) - parseInt(numberValues.number2);
    showResult(difference);
}

minusButton.addEventListener("click", minusOperation);


//Multiplication operation
mulButton = document.getElementById("mulButton");
mulOperation = function () {
    numberValues = getValues();
    multiplication = parseInt(numberValues.number1) * parseInt(numberValues.number2);
    showResult(multiplication);
}

mulButton.addEventListener("click", mulOperation);

//Division operation
divButton = document.getElementById("divButton");
divOperation = function () {
    numberValues = getValues();
    division = parseInt(numberValues.number1) / parseInt(numberValues.number2);
    showResult(division);
}

divButton.addEventListener("click", divOperation);
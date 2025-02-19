

// handling button clicks , Processing Keyboard Inputs , Performing Arithmetic Operations , Displaying the result on the screen

// Event Listeners , Dom Manipulation , Regular Expressions , String Manipulation

// DomContent Loaded Event
document.addEventListener('DOMContentLoaded', function () {
    document.addEventListener("keydown", handleKeyPress);
});

//selecting the display input field
let display = document.getElementById("display");

// Handling Number Input
function appendNumber(number) {
    display.value += number;  // 72
}

// Handling Operator Input
function appendOperator(operator) {
    if (display.value !== "") {
        display.value += operator;
    }
}

//Clearing the Display
function clearDisplay() {
    display.value = "";
}
//Deleting the last character
function backspace() {
    display.value = display.value.slice(0, -1);
}
//Evaluating the expression

function calculateResult() {
    try {
        display.value = eval(display.value);
    }
    catch {
        display.value = "Error";
        alert("Invalid Expression");
    }
}

//Handling Keyboard Inputs
function handleKeyPress(event) {
    const key = event.key;
    if ((/[0-9+\-*/.]/).test(key)) {
        appendNumber(key);
    } else if (key === "Enter") {
        calculateResult();
    } else if (key === "Backspace") {
        backspace();
    } else if (key === "Escape") {
        clearDisplay();
    }
    else {
        alert("only numbers and operators are allowed");
    }
}

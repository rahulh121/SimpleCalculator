function appendToDisplay(value) {
    document.getElementById('display').textContent += value;
}

function clearDisplay() {
    document.getElementById('display').textContent = '';
}

function calculate() {
    var display = document.getElementById('display');
    try {
        display.textContent = eval(display.textContent);
    } catch {
        display.textContent = 'Error';
    }
}

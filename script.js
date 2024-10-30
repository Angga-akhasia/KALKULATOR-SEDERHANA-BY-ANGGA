// Mendapatkan elemen display
const display = document.getElementById("display");

// Fungsi untuk menambahkan angka ke display
function appendNumber(number) {
    if (display.value === "0") {
        display.value = number;
    } else {
        display.value += number;
    }
}

// Fungsi untuk menambahkan operator ke display
function appendOperator(operator) {
    const lastChar = display.value.slice(-1);
    if ("+-*/.".includes(lastChar)) {
        display.value = display.value.slice(0, -1) + operator;
    } else {
        display.value += operator;
    }
}

// Fungsi untuk menambahkan fungsi matematika (misalnya, sin, cos, tan)
function appendFunction(func) {
    display.value += func;
}

// Fungsi untuk menghitung hasil
function calculate() {
    try {
        display.value = eval(display.value.replace(/Math./g, 'Math.'));
    } catch {
        display.value = "ERROR SHENG ^_^";
    }
}

// Fungsi untuk menghitung faktorial
function factorial(n) {
    if (n < 0) return "Error";
    return n <= 1 ? 1 : n * factorial(n - 1);
}

// Fungsi untuk menghitung dan menangani faktorial di display
function handleFactorial(value) {
    const number = parseInt(value);
    return factorial(number);
}

// Fungsi untuk menghapus display
function clearDisplay() {
    display.value = "0";
}

// Fungsi untuk menghapus karakter terakhir
function deleteLast() {
    if (display.value.length > 1) {
        display.value = display.value.slice(0, -1);
    } else {
        display.value = "0";
    }
}
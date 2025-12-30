// Mengambil elemen tampilan
const displayElement = document.getElementById('display');
const historyElement = document.getElementById('history');

let currentExpression = "";
let isResultDisplayed = false;

// Fungsi memperbarui tampilan layar
function updateDisplay() {
    if (currentExpression === "") {
        displayElement.innerText = "0";
    } else {
        // Mengganti operator JS dengan simbol visual
        let visualExpression = currentExpression
            .replace(/\*/g, '×')
            .replace(/\//g, '÷')
            .replace(/sqrt\(/g, '√(')
            .replace(/Math.PI/g, 'π')
            .replace(/Math.E/g, 'e');
        displayElement.innerText = visualExpression;
    }
}

// Menambahkan angka ke ekspresi
function appendNumber(number) {
    if (isResultDisplayed) {
        currentExpression = number;
        isResultDisplayed = false;
        historyElement.innerText = "";
    } else {
        currentExpression += number;
    }
    updateDisplay();
}

// Menambahkan karakter/operator
function appendCharacter(char) {
    if (isResultDisplayed) {
        isResultDisplayed = false;
    }
    
    const ops = ['+', '-', '*', '/', '^', '%', '.'];
    const lastChar = currentExpression.slice(-1);

    if (ops.includes(char)) {
        if (ops.includes(lastChar)) {
            if (char === lastChar) {
                return; 
            }
            // Izinkan tanda negatif setelah kali/bagi/pangkat
            if (char === '-' && ['*', '/', '^'].includes(lastChar)) {
                 currentExpression += char;
            } 
            else {
                // Ganti operator jika tidak valid
                const secondLastChar = currentExpression.slice(-2, -1);
                if (ops.includes(secondLastChar)) {
                    currentExpression = currentExpression.slice(0, -2) + char;
                } else {
                    currentExpression = currentExpression.slice(0, -1) + char;
                }
            }
        } else {
            currentExpression += char;
        }
    } else {
        currentExpression += char;
    }
    updateDisplay();
}

// Menambahkan fungsi matematika
function appendFunction(funcName) {
    if (isResultDisplayed) {
        currentExpression = "";
        isResultDisplayed = false;
        historyElement.innerText = "";
    }
    currentExpression += funcName;
    updateDisplay();
}

// Menghapus semua (AC)
function clearDisplay() {
    currentExpression = "";
    historyElement.innerText = "";
    isResultDisplayed = false;
    updateDisplay();
}

// Menghapus satu karakter (DEL)
function deleteLast() {
    if (isResultDisplayed) {
        clearDisplay();
    } else {
        if (currentExpression.endsWith('sin(') || currentExpression.endsWith('cos(') || 
            currentExpression.endsWith('tan(') || currentExpression.endsWith('log(')) {
            currentExpression = currentExpression.slice(0, -4);
        } else if (currentExpression.endsWith('ln(')) {
            currentExpression = currentExpression.slice(0, -3);
        } else if (currentExpression.endsWith('sqrt(')) {
            currentExpression = currentExpression.slice(0, -5);
        } else {
            currentExpression = currentExpression.slice(0, -1);
        }
        updateDisplay();
    }
}

// Logika Utama Perhitungan
function calculateResult() {
    try {
        if (currentExpression === "") return;

        let visualHistory = currentExpression
            .replace(/\*/g, '×')
            .replace(/\//g, '÷');
        historyElement.innerText = visualHistory + " =";

        let evalString = currentExpression;

        evalString = evalString.replace(/×/g, '*');
        evalString = evalString.replace(/÷/g, '/');
        
        evalString = evalString.replace(/π/g, 'Math.PI');
        evalString = evalString.replace(/e/g, 'Math.E');
        
        evalString = evalString.replace(/sin\(/g, 'Math.sin(');
        evalString = evalString.replace(/cos\(/g, 'Math.cos(');
        evalString = evalString.replace(/tan\(/g, 'Math.tan(');
        evalString = evalString.replace(/log\(/g, 'Math.log10(');
        evalString = evalString.replace(/ln\(/g, 'Math.log(');
        evalString = evalString.replace(/sqrt\(/g, 'Math.sqrt(');

        evalString = evalString.replace(/\^/g, '**');

        const result = new Function('return ' + evalString)();

        let finalResult = result;
        if (!Number.isInteger(result)) {
            finalResult = parseFloat(result.toFixed(8));
        }

        if (isNaN(finalResult) || !isFinite(finalResult)) {
            displayElement.innerText = "Error";
        } else {
            displayElement.innerText = finalResult;
            currentExpression = finalResult.toString();
        }
        
        isResultDisplayed = true;

    } catch (error) {
        displayElement.innerText = "Error";
        isResultDisplayed = true; 
    }
}

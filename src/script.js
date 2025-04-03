let count = document.getElementById("count");

document.getElementById("increment").addEventListener("click", function() {
    count.innerText = parseInt(count.innerText) + 1; // BUG 3: está atribuindo o novo valor
});

document.getElementById("decrement").onclick = function() {
    let currentValue = parseInt(count.innerText);
    if (currentValue > 0) {  // Só decrementa se o valor for maior que 0
        count.innerText = currentValue - 1;
    }
};

// BUG 5: Permite valores negativos

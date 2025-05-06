let count = document.getElementById("count");

document.getElementById("increment").addEventListener("click", function() {
    count.innerText + 1; // BUG 3: Não está atribuindo o novo valor
});

document.getElementById("decrement").onclick = function() {
    let currentValue = parseInt(count.innerText);
    if (currentValue > 0) { // Impede valores negativos
        count.innerText = currentValue - 1;
    }
};

// BUG 5: Permite valores negativos

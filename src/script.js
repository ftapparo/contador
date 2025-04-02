let count = document.getElementById("count");

document.getElementById("increment").addEventListener("click", function() {
    count.innerText = Number(count.innerText) + 1; // Corrigido para converter para número e somar 1
});

document.getElementById("decrement").onclick = function() {
    let currentValue = Number(count.innerText); // Converter para número
    if (currentValue > 0) { // Impede valores negativos
        count.innerText = currentValue - 1;
    }
};

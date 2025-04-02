let count = document.getElementById("count");

document.getElementById("increment").addEventListener("click", function() {
    count.innerText = parseInt(count.innerText) + 1; // Corrigido: agora atribui o novo valor
});


document.getElementById("decrement").onclick = function() {
    count.innerText = count.innerText - 1; // BUG 4: Trata innerText como string
};

// BUG 5: Permite valores negativos

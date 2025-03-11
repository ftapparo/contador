let count = document.getElementById("count");

document.getElementById("increment").addEventListener("click", function() {
    count.innerText + 1; // BUG 3: Não está atribuindo o novo valor
});

document.getElementById("decrement").onclick = function() {
    count.innerText --; // BUG 4: Trata innerText como string (bugfix4-corrigido)
};

// BUG 5: Permite valores negativos

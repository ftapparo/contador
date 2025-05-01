let count = document.getElementById("count");

document.getElementById("increment").addEventListener("click", function() {
    count.innerText = parseInt(count.innerText) + 1; // BUG 3: Não está atribuindo o novo valor (bugfix3-corrigido)
});

document.getElementById("decrement").onclick = function() {
    // BUG 4: Trata innerText como string (bugfix4-corrigido)
    // BUG 5: Permite valores negativos (bugfix5-corrigido)
    if (count.innerText > 0) {
        count.innerText = parseInt(count.innerText) - 1; 
    }
};
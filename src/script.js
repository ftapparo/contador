let count = document.getElementById("count");

document.getElementById("increment").addEventListener("click", function() {
    count.innerText = parseInt(count.innerText) + 1; // Corrigido: agora atribui o novo valor
});


document.getElementById("decrement").onclick = function() {
    count.innerText = parseInt(count.innerText) - 1;  // Corrigido: converte innerText para número
};


// BUG 5: Permite valores negativos

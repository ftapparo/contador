let count = document.getElementById("count");

document.getElementById("increment").addEventListener("click", function() {
    count.innerText = parseInt(count.innerText) + 1; // BUG 3: Não está atribuindo o novo valor RESOLVIDO
});

document.getElementById("decrement").onclick = function() {
    let valorAtual = parseInt(count.innerText) // BUG 4: Trata innerText como string RESOLVIDO
    
    if (valorAtual > 0) {
        count.innerText = valorAtual - 1;
    }
};

// BUG 5: Permite valores negativos RESOLVIDO

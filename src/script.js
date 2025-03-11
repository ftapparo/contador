let count = document.getElementById("count");

document.getElementById("increment").addEventListener("click", function() {
    count.innerText ++; // BUG 3: Não está atribuindo o novo valor (bugfix3-corrigido)
});

document.getElementById("decrement").onclick = function() {
    //count.innerText = count.innerText - 1; // BUG 4: Trata innerText como string

    if (count.innerText != 0) {// BUG 5: Permite valores negativos (bugfix5-corrigido)
        count.innerText --; 
    }
};


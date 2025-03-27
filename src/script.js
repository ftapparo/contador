let count = document.getElementById("count");

document.getElementById("increment").addEventListener("click", function() {
    count.innerText = parseInt(count.innerText) + 1; // BUG 3: Não está atribuindo o novo valor
});

document.getElementById("decrement").onclick = function() {
    count.innerText =  parseInt(count.innerText) - 1; // BUG 4: Trata innerText como string
    
document.getElementById("decrement").onclick = function() {
    if (parseInt(count.innerText) > 0) {
        count.innerText = parseInt(count.innerText) - 1;
    }
};
};


// BUG 5: Permite valores negativos

let count = document.getElementById("count");

document.getElementById("increment").onclick = function() {
    count.innerText = parseInt(count.innerText) + 1; // BUG 4: Trata innerText como string
};

document.getElementById("decrement").onclick = function() {
    count.innerText = parseInt(count.innerText) - 1; // BUG 4: Trata innerText como string
};

// BUG 5: Permite valores negativos

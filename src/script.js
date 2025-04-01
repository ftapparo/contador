let count = document.getElementById("count");

document.getElementById("increment").addEventListener("click", function() {
    count.innerText = Number(count.innerText) + 1;
});

document.getElementById("decrement").onclick = function() {
    count.innerText = Number(count.innerText) - 1; // BUG 4: Trata innerText como string
};

// BUG 5: Permite valores negativos

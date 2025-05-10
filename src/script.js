let count = document.getElementById("count");

document.getElementById("increment").addEventListener("click", function() {
    count.innerText = Number(count.innerText) + 1; // Correção do BUG 3
});

document.getElementById("decrement").onclick = function() {
    let currentValue = Number(count.innerText);
    if (currentValue > 0) { // Correção do BUG 5
        count.innerText = currentValue - 1; // Correção do BUG 4
    }
};

let count = document.getElementById("count");

document.getElementById("increment").addEventListener("click", function () {
    count.innerText = parseInt(count.innerText) + 1;
});

document.getElementById("decrement").onclick = function() {
    count.innerText = parseInt(count.innerText) - 1;
};

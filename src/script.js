let count = document.getElementById("count");

document.getElementById("increment").addEventListener("click", function() {
    count.innerText = Number(count.innerText) + 1;
});

document.getElementById("decrement").onclick = function() {
    if (Number(count.innerText) > 0){
    count.innerText = Number(count.innerText) - 1; 
    }
};


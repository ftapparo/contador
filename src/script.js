let count = document.getElementById("count");

document.getElementById("increment").addEventListener("click", function() {
    let currentCount = parseInt(count.innerText); 
    count.innerText = currentCount + 1; 
});

document.getElementById("decrement").onclick = function() {
    let currentCount = parseInt(count.innerText); 

 
    if (currentCount > 0) {
        count.innerText = currentCount - 1;
    }
};
// BUG 5: Permite valores negativos

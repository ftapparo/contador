let count = document.getElementById("count");

document.getElementById("increment").addEventListener("click", function() {
    count.innerText ++; // BUG 3: Não está atribuindo o novo valor
});

document.getElementById("decrement").onclick = function() {
   if (count.innerText != 0) {
    
       count.innerText --; // BUG 4: Trata innerText como string
   } 
};

// BUG 5: Permite valores negativos

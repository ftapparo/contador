let count = document.getElementById("count");

document.getElementById("increment").addEventListener("click", function() {
    var numero = count.innerHTML;
    numero++;
    count.innerHTML = numero; // BUG 3: Não está atribuindo o novo valor
});

document.getElementById("decrement").onclick = function() {
    var numero = count.innerHTML;
    if(numero > 0){
        numero--;
        count.innerHTML = numero;
    }else{
        count.innerHTML = numero;
    }
    
};

// BUG 5: Permite valores negativos

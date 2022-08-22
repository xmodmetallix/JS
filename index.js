// Calculadora de factoriales

let fact = parseInt(prompt("Calculadora de factorailes \n Ingrese un numero"))

let total = 1
for (i = 1; i <= fact; i++) {
    total = total * i
    console.log(total)
}

alert("Su factorial es de " + total)
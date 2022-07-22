let num1 = Number (prompt("Qual o primeiro número?"));
let num2 = Number (prompt("Qual o segundo número?"));
let calculo

calculo = num1 > num2
console.log("O primeiro número é maior que o segundo?", calculo)

calculo = num1 === num2
console.log("O primeiro número é igual ao segundo?", calculo)

calculo = (num1 % num2) === 0
console.log("O primeiro número é divisível pelo segundo?", calculo)

calculo = (num2 % num1) === 0
console.log("O segundo número é divisível pelo primeiro?", calculo)
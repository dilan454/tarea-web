let result = 4.6;
let result2 = 2.25;

result *= result2;

let finalResult = result.toFixed(2);

console.log("El tipo de dato de finalResult antes de la conversión es:", typeof finalResult);

let finalNumber = Number(finalResult);

console.log("El tipo de dato de finalNumber después de la conversión es:", typeof finalNumber);
console.log("El valor de finalNumber es:", finalNumber);

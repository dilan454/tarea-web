let quote = "La vida es como una bicicleta, para mantener el equilibrio, debes seguir adelante.";
let quoteLength = quote.length;

let substring = "para mantener el equilibrio";
let index = quote.indexOf(substring);

let revisedQuote = quote.slice(0, index) + "No me gustan los huevos verdes y el jamón";

console.log("Longitud de la cita:", quoteLength);
console.log("Índice de la subcadena:", index);
console.log("Cita revisada:", revisedQuote);

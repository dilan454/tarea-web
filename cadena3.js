let fixedQuote = revisedQuote.charAt(0).toUpperCase() + revisedQuote.slice(1);

fixedQuote = fixedQuote.replace("huevos verdes y el jamón", "brócoli");

let finalQuote = fixedQuote + ".";

console.log(finalQuote);

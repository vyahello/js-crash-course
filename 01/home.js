let country = 'Ukraine'
let continent = 'Europe'
let population = 45_000_000

console.log(country);
console.log(continent);
console.log(population);


const bill = 275;
const tip = bill <= 300 && bill >= 50 ? bill * .15 : bill * 0.5;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);

/*
const checkDogs = function (j, k) {
  const dogsJC = j.slice(); // copy array
  dogsJC.splice(0, 1);
  dogsJC.splice(-2);

  const dogs = dogsJC.concat(k);
  console.log(dogs);

  dogs.forEach(function (dog, i) {
    if (dog >= 3) {
      console.log(`Dog number ${i + 1} is an adult and is ${dog} year old`);
    } else {
      console.log(`Dog ${i + 1} is still puppy`);
    }
  });
};
checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
*/

const calcAvAge = function (ages) {
  const humanAges = ages.map(age => (age <= 2 ? 2 * age : 16 + age * 4));
  const adults = humanAges.filter(age => age >= 18);
  const avr = adults.reduce((acc, age, i, arr) => acc + age / adults.length, 0);
  console.log(avr);
  return avr;
};
calcAvAge([2, 3, 4, 5, 18]);

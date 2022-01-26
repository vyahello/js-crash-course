/*
// functions
const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3
const avgDolphins = calcAverage(44, 23, 71);
const avgKoalas = calcAverage(65, 54, 49);

function checkWinner(avgDolphins, avgKoalas) {
    if (avgDolphins >= avgKoalas * 2) {
        return `Dolphins win (${avgDolphins} vs ${avgKoalas}`
    }
    else if (avgKoalas >= avgDolphins * 2) {
        return `Koalas win (${avgDolphins} vs ${avgKoalas})`
    }
    else {
        return 'Draw'
    }
}
console.log(checkWinner(avgDolphins, avgKoalas));
console.log(checkWinner(calcAverage(85, 54, 41), calcAverage(23, 34, 27)));


// array
const calcTip = bill => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2
const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[1])]
console.log(bills, tips)
console.log(bills + tips); // will be a string '125,555,4418.75,111,111'
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(totals);
*/

// objects
const getSummary = function (fullName, mass, height) {
    return {
        fullName: fullName,
        mass: mass,
        height: height,
        calcBMI: function () {
            this.bmi = this.mass / this.height ** 2
            return this.bmi;
        }
    };
}


const mark = getSummary('Mark Miller', 78, 1.69);
const john = getSummary('John Smith', 92, 1.95);

console.log(mark.calcBMI());
console.log(john.calcBMI());

if (mark.bmi > john.bmi) {
    console.log(`${mark.fullName}'s BMI is greater than ${john.fullName} ${john.bmi}`)
}
else {
    onsole.log(`${john.fullName}'s BMI is greater than ${mark.fullName} ${mark.bmi}`)
}

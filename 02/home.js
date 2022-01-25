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

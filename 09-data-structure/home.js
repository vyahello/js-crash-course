const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

/*
const [p1, p2] = game.players;
console.log(p1, p2);

const [gk, ...fieldPlay] = p1;
console.log(gk, fieldPlay);

const allPlay = [...p1, ...p2];
console.log(allPlay);

const p1f = [...p1, 'Thiago', 'Countinho'];

const {
  odds: { team1, x: draw, team2 },
} = game; // {team1: 1.33, x: 3.25, team2: 6.5}
console.log(team1, draw, team2);

//
const printGoal = function (...players) {
  console.log(`${players.length} goals were scored`);
};
printGoal(...game.scored);

team1 < team2 && console.log('Team 1 will win');


for (const [i, player] of game.scored.entries()) {
  console.log(`Goal ${i + 1}: ${player}`);
}

let average = 0;
for (const i of Object.values(game.odds)) {
  average += i;
}
average /= Object.values(game.odds).length;
console.log(average);

for (const [team, odd] of Object.entries(game.odds)) {
  const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
  console.log(`Odd of ${teamStr} ${odd}`);
}
*/

const gameEvents = new Map([
  [17, '⚽ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽ GOAL'],
  [80, '⚽ GOAL'],
  [92, '🔶 Yellow card'],
]);

const events = [...new Set(gameEvents.values())];
console.log(events);

gameEvents.delete(64);

const time = [...gameEvents.keys()].pop();
console.log(time);
console.log(`Every ${time / gameEvents.size} minutes`);

for (const [min, event] of gameEvents) {
  const half = min <= 45 ? 'FIRST' : 'SECOND';
  console.log(`[ ${half}] ${min}:${event}`);
}

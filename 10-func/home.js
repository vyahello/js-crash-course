/*
const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  // This generates [0, 0, 0, 0]. More in the next section 😃
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    // Get answer
    const answer = Number(
      prompt(`${this.question}\n${this.options.join('\n')}\n(Write option)`)
    );
    console.log(answer);

    // Register answer
    typeof answer === 'number' &&
      answer < this.answers.length &&
      this.answers[answer]++;

    this.displayResults();
    this.displayResults('string');
  },
  displayResults(type = 'array') {
    if (type === 'array') {
      console.log(this.answers);
    } else if (type === 'string') {
      console.log(`Poll results are ${this.answers.join(', ')}`);
    }
  },
};

// if we click call poll.registerNewAnswer method
document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));

poll.displayResults.call({ answers: [5, 2, 3] }); // [5, 2, 3]
poll.displayResults.call({ answers: [5, 2, 3] }, 'string'); // 
*/

(function () {
  // callback func
  const header = document.querySelector('h1');
  header.style.color = 'red';

  document
    .querySelector('body')
    .addEventListener('click', () => (header.style.color = 'blue'));
})();
// this works because of closure, even it called only once

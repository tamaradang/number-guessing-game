export class Game {
  answer: number = 1;
  hint: number = 0;
  guessCount: number = 0;

  constructor() {
    this.reset();
  }
  public reset() {
    this.answer = 1 + Math.floor(10 * Math.random());
    this.hint = 0;
    this.guessCount = 0;
  }
  
}

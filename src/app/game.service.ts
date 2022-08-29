import { Injectable } from '@angular/core';
import { Grade } from "./grade";
import { Game } from "./game";

@Injectable({
  providedIn: 'root'
})
export class GameService {
  problem: Game;
  userAnswer: string;
  userAnswerOld: string;

  constructor() {
    this.problem = new Game();
    this.userAnswer = '';
    this.userAnswerOld = '';
  }

  reset() {
    this.problem.reset();
    this.userAnswer = '';
    this.userAnswerOld = '';
  }

  gradeQuiz(): Grade {
    this.problem.guessCount++;

    if (this.userAnswer === '') {
      this.userAnswer = 'empty';
      return Grade.InputError;
    }

    const parsed = parseFloat(this.userAnswer);

    if (isNaN(parsed)) {
      return Grade.InputError;
    } else {
      this.userAnswerOld = this.userAnswer;

      if (parsed === this.problem.answer) {
        return Grade.RightAnswer;
      } else if (parsed > this.problem.answer) {
        this.problem.hint = 1;
        return Grade.WrongAnswerHigh;
      } else {
        this.problem.hint = -1;
        return Grade.WrongAnswerLow;
      }
    }
  }
}

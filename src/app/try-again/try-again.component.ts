import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Game } from '../game';
import { GameService } from '../game.service';
import { navigate } from '../navigate';
import { faNotEqual } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-try-again',
  templateUrl: './try-again.component.html',
  styleUrls: ['./try-again.component.css']
})
export class TryAgainComponent implements OnInit {

  faNotEqual = faNotEqual;

  problem: Game;
  userAnswerOld: string = '';

  constructor(
    private quiz: GameService,
    private readonly router: Router) {
    this.problem = quiz.problem;
    this.userAnswerOld = quiz.userAnswer;
  }

  public check(guess: string) {
    this.quiz.userAnswer = guess;
    this.userAnswerOld = this.quiz.userAnswer;

    console.log('oldAnswer=[' + this.userAnswerOld + ']');
    console.log('userAnswer=[' + guess + ']');
    navigate(this.quiz.gradeQuiz(), this.router);
  }

  ngOnInit(): void {
  }

}

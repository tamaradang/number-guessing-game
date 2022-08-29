import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Game } from '../game';
import { GameService } from '../game.service';
import { navigate } from '../navigate';
import { faQuestion } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-new-number',
  templateUrl: './new-number.component.html',
  styleUrls: ['./new-number.component.css']
})
export class NewNumberComponent implements OnInit {

  faQuestion = faQuestion;

  problem: Game;

  constructor(private quiz: GameService,
              private readonly router: Router
  ) {
    this.problem = quiz.problem;
    this.problem.reset();
  }

  public check(userAnswer: string) {
    this.quiz.userAnswer = userAnswer;
    console.log('userAnswer=[' + userAnswer + ']');
    navigate(this.quiz.gradeQuiz(), this.router);
  }

  ngOnInit(): void {
  }

}

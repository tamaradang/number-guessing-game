import { Component, OnInit } from '@angular/core';
import { GameService } from '../game.service';
import { Game } from '../game';
import { faQuestion } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-input-error',
  templateUrl: './input-error.component.html',
  styleUrls: ['./input-error.component.css']
})
export class InputErrorComponent implements OnInit {

  faQuestion = faQuestion;

  problem: Game;
  userAnswer: string;

  constructor(quiz: GameService) {
    this.problem = quiz.problem;
    this.userAnswer = quiz.userAnswer;
  }

  ngOnInit(): void {
  }

}

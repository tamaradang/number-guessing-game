import { Component, OnInit } from '@angular/core';
import { Game } from '../game';
import { GameService } from "../game.service";
import { faMedal } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-right-answer',
  templateUrl: './right-answer.component.html',
  styleUrls: ['./right-answer.component.css']
})
export class RightAnswerComponent implements OnInit {

  faMedal = faMedal;

  problem: Game;
  userAnswer: string;

  constructor(quiz: GameService) {
    this.problem = quiz.problem;
    this.userAnswer = quiz.userAnswer;
  }

  ngOnInit(): void {
  }

}

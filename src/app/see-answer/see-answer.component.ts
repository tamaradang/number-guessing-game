import { Component, OnInit } from '@angular/core';
import { Game } from '../game';
import { GameService } from '../game.service';
import { faCalculator } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-see-answer',
  templateUrl: './see-answer.component.html',
  styleUrls: ['./see-answer.component.css']
})
export class SeeAnswerComponent implements OnInit {

  faCalculator = faCalculator;

  problem: Game;

  constructor(quiz: GameService) {
    this.problem = quiz.problem;
  }

  ngOnInit(): void {
  }

}

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  @Input() name: string = 'Sheridan College';
  today: Date;
  constructor() {
    this.today = new Date();
  }

  ngOnInit(): void {
  }

}

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeeAnswerComponent } from './see-answer.component';

describe('SeeAnswerComponent', () => {
  let component: SeeAnswerComponent;
  let fixture: ComponentFixture<SeeAnswerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeeAnswerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeeAnswerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

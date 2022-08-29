import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewNumberComponent } from './new-number.component';

describe('NewNumberComponent', () => {
  let component: NewNumberComponent;
  let fixture: ComponentFixture<NewNumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewNumberComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

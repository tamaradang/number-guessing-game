import {Router} from '@angular/router';
import {Grade} from './grade';

export function navigate(grade: Grade, router: Router) {
  switch (grade) {
    case Grade.RightAnswer: {
      router.navigate(['/', 'right-answer']).then(() => console.log('right answer'));
      break;
    }
    case Grade.WrongAnswerHigh: {
      router.navigate(['/', 'try-again']).then(() => console.log('wrong answer; too high'));
      break;
    }
    case Grade.WrongAnswerLow: {
      router.navigate(['/', 'try-again']).then(() => console.log('wrong answer; too low'));
      break;
    }
    case Grade.InputError: {
      router.navigate(['/', 'input-error']).then(() => console.log('input error'));
      break;
    }
  }
}

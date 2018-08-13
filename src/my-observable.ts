import { Observable } from 'rxjs';
import { DATA_1 } from 'data';

export class MyObservable {

  static observable$: Observable<number>;

  constructor() {
  }

  static init1() {
    this.observable$ = new Observable<number>((observer) => {
      for (let i = 0; i < DATA_1.length; i++) {
        observer.next(DATA_1[i]);
      }
      observer.complete();
    });
  }

  static init2() {
    this.observable$ = new Observable<number>((observer) => {
      for (let i = 0; i < DATA_1.length; i++) {
        observer.next(DATA_1[i]);
      }
      observer.error('Error message');
      observer.complete();
    });
  }

  static subscribe() {
    this.observable$.subscribe(
      {
        next: x => console.log('got value ' + x),
        error: err => console.error('something wrong occurred: ' + err),
        complete: () => console.log('done'),
      }
    );
  }
}

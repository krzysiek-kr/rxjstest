import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

export class MyObservable {

  observable$: Observable<number>;

  constructor() {
    this.observable$ = new Observable<number>((observer) => {
      observer.next(1);
      observer.next(2);
      observer.next(3);
      observer.next(4);
      observer.error(5);
    });
  }

}

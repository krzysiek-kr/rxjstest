import { Observable, Observer } from 'rxjs';

export class MyObservable {

  observable$: Observable<number>;

  constructor() {
    this.observable$ = new Observable<number>((observer: Observer<number>) => {
      observer.next(1);
      observer.next(2);
      observer.next(3);
      observer.complete();
    });
  }

}

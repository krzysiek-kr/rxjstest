import { Observable, Subscriber } from 'rxjs';

export class TestObservable {
  test$: Observable<string>;
  constructor() {
    this.test$ = new Observable<string>((observer: Subscriber<string>) => {
      observer.next('Hello, RxJS!');
      observer.complete();
    });
  }
}

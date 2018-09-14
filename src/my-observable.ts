import { Observable, combineLatest, forkJoin } from 'rxjs';

export class MyObservable1 {

  observable1$: Observable<number>;

  constructor() {
    this.observable1$ = new Observable<number>((observer) => {
      observer.next(1);
      observer.next(2);
      observer.next(3);
      observer.next(4);
      setTimeout(() => {
        observer.next(5);
        observer.complete();
      }, 1000);
    });
  }
}

export class MyObservable2 {

  observable2$: Observable<number>;

  constructor() {
    this.observable2$ = new Observable<number>((observer) => {
      observer.next(10);
      observer.next(20);
      observer.next(30);
      setTimeout(() => {
        observer.next(40);
      }, 200);
      setTimeout(() => {
        observer.next(50);
        observer.complete();
      }, 300);
    });
  }
}

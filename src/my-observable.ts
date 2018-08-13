import { Observable, combineLatest, forkJoin } from 'rxjs';

export class MyObservable {

  static observable1$: Observable<number>;
  static observable2$: Observable<number>;

  constructor() {
  }

  static init1() {
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
  static init2() {
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
  static combine() {
    const combined$ = combineLatest(this.observable1$, this.observable2$, (x, y) => x + y);
    combined$.subscribe(
      {
        next: x => console.log('got value ' + x),
        error: err => console.error('something wrong occurred: ' + err),
        complete: () => console.log('done'),
      }
    );
  }

  static forkJoin() {
    const forkJoined$ = forkJoin(this.observable1$, this.observable2$, (x, y) => x + y);
    forkJoined$.subscribe(
      {
        next: x => console.log('got value ' + x),
        error: err => console.error('something wrong occurred: ' + err),
        complete: () => console.log('done'),
      }
    );
  }

}

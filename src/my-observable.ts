import { from, Subject, ConnectableObservable } from 'rxjs';
import { multicast } from 'rxjs/operators';

export class MyObservable {

  static multicasted$: ConnectableObservable<any>;

  constructor() {
  }

  static init() {
    const source$ = from([1, 2, 3]);
    const subject$ = new Subject();
    this.multicasted$ = source$.pipe(multicast(subject$)) as ConnectableObservable<any>;
  }

  static subscribe() {

    this.multicasted$.subscribe(
      {
        next: x => console.log('observer A got value ' + x),
        error: err => console.error('something wrong occurred: ' + err),
        complete: () => console.log('done'),
      }
    );

    this.multicasted$.subscribe(
      {
        next: x => console.log('observer B got value ' + x),
        error: err => console.error('something wrong occurred: ' + err),
        complete: () => console.log('done'),
      }
    );

    this.multicasted$.connect();
  }

}

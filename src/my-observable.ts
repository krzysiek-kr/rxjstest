import { ConnectableObservable, BehaviorSubject, ReplaySubject, AsyncSubject } from 'rxjs';

export class MyObservable {

  static multicasted$: ConnectableObservable<any>;

  constructor() {
  }

  static initBehaviorSubject() {
    const subject = new BehaviorSubject(0);

    subject.subscribe({
      next: (v) => console.log('observerA: ' + v)
    });

    subject.next(1);
    subject.next(2);

    subject.subscribe({
      next: (v) => console.log('observerB: ' + v)
    });

    subject.next(3);

  }

  static initReplaySubject() {
    console.log('----------------------------');
    const subject = new ReplaySubject(3);

    subject.subscribe({
      next: (v) => console.log('observerA: ' + v)
    });

    subject.next(1);
    subject.next(2);
    subject.next(3);
    subject.next(4);

    subject.subscribe({
      next: (v) => console.log('observerB: ' + v)
    });

    subject.next(5);

  }

  static initAsyncSubject() {
    console.log('----------------------------');
    const subject = new AsyncSubject();

    subject.subscribe({
      next: (v) => console.log('observerA: ' + v)
    });

    subject.next(1);
    subject.next(2);
    subject.next(3);
    subject.next(4);

    subject.subscribe({
      next: (v) => console.log('observerB: ' + v)
    });

    subject.next(5);
    subject.complete();

  }

}

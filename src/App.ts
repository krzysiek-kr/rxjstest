import { MyObservable1, MyObservable2 } from 'my-observable';
import { combineLatest, forkJoin } from 'rxjs';

export class App {
  run() {

    // ex 1: combine each value emitted by two observables to get x + y
    const observableClass1 = new MyObservable1();
    const observableClass2 = new MyObservable2();
    // ... //
    .subscribe(
      {
        next: x => console.log('got value ' + x),
        error: err => console.error('something wrong occurred: ' + err),
        complete: () => console.log('done'),
      }
    );

    // ex 2: use forkJoin to combine values emitted by two observables to get x + y
    const observableClass3 = new MyObservable1();
    const observableClass4 = new MyObservable2();
    // ... //
    .subscribe(
      {
        next: x => console.log('got value ' + x),
        error: err => console.error('something wrong occurred: ' + err),
        complete: () => console.log('done'),
      }
    );
  }
}

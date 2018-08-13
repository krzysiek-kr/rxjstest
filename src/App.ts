import { MyObservable } from 'my-observable';

export class App {
  run() {
    MyObservable.init1();
    MyObservable.init2();
    MyObservable.combine();

    MyObservable.init1();
    MyObservable.init2();
    MyObservable.forkJoin();
  }
}

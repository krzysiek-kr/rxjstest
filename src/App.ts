import { MyObservable } from 'my-observable';

export class App {
  run() {
    MyObservable.init1();
    MyObservable.catchErrors1();
    MyObservable.init2();
    MyObservable.catchErrors2();
  }
}

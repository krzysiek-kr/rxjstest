import { MyObservable } from 'my-observable';

export class App {
  run() {
    MyObservable.init1();
    MyObservable.subscribe();
    MyObservable.init2();
    MyObservable.subscribe();
  }
}

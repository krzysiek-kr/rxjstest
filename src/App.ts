import { MyObservable } from 'my-observable';

export class App {
  run() {
    MyObservable.init();
    MyObservable.subscribe();
  }
}

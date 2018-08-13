import { MyObservable } from 'my-observable';

export class App {
  run() {
    MyObservable.init();
    MyObservable.map();
    MyObservable.filter();
    MyObservable.subscribe();
    MyObservable.init();
    MyObservable.joinAllOperators();
    MyObservable.subscribe();
  }
}

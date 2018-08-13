import { MyObservable } from 'my-observable';

export class App {
  run() {
    MyObservable.initBehaviorSubject();
    MyObservable.initReplaySubject();
    MyObservable.initAsyncSubject();
  }
}

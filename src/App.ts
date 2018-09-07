import { TestObservable } from 'test/TestObservable';

export class App {
  run() {
    const test = new TestObservable();
    test.test$.subscribe((value) => {
      console.log(value);
    });
  }
}

import { MyObservable } from 'my-observable';
import { Observer, Subscription } from 'rxjs';

export class App {
  run() {
    const observableClass = new MyObservable();
    const observerA: Observer<number> = {
      next: (value: number) => {
        console.log('A: value: ' + value);
      },
      error: (error) => {
        console.error('A: error: ' + error);
      },
      complete: () => {
        console.log('A: complete');
      },
    };
    const observerB: Observer<number> = {
      next: (value: number) => {
        console.log('B: value: ' + value);
      },
      error: (error) => {
        console.error('B: error: ' + error);
      },
      complete: () => {
        console.log('B: complete');
      },
    };

    const subscriptionA: Subscription = observableClass.observable$.subscribe(observerA);
    const subscriptionB: Subscription = observableClass.observable$.subscribe(observerB);
    subscriptionA.unsubscribe();
    subscriptionB.unsubscribe();
  }
}

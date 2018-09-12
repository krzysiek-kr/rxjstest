import { MyObservable } from 'my-observable';
import { Subscription } from 'rxjs';

export class App {
  run() {
    const observableClass = new MyObservable();
    const subscription: Subscription = observableClass.observable$.subscribe({
      next: (x) => {
        console.log('got value ' + x);
      },
      error: (err) => {
        console.error('something wrong occurred: ' + err);
      },
      complete: () => {
        console.log('done');
      },
    });
    subscription.unsubscribe();
  }
}

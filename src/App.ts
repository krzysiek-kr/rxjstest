import { MyObservable } from 'my-observable';
import { Subscription } from 'rxjs';

export class App {
  run() {
    const observableClass = new MyObservable();
    const subscription: Subscription = observableClass.observable$.subscribe({
      next: (value) => {
        console.log('value: ' + value);
      },
      error: (error) => {
        console.error('error: ' + error);
      },
      complete: () => {
        console.log('complete');
      },
    });
    subscription.unsubscribe();
  }
}

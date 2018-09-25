import { MyObservable } from 'my-observable';

export class App {
  run() {

    const observableClass1 = new MyObservable();
    const sub = observableClass1.observable$
    /* ... */
    .subscribe({
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
  }
}

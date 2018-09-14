import { MyObservable } from 'my-observable';
import { map, filter, flatMap } from 'rxjs/operators';
import { getTranslations } from './data';

export class App {
  run() {


    // ex 1: pass each 'x' source value through a transformation function to get 'x + 5' output value

    const observableClass1 = new MyObservable();
    observableClass1.observable$.pipe(
      /* ... */
    ).subscribe({
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

    // ex 2: pass each 'x' source value through a transformation function to get only 'x % 2 === 0' values

    const observableClass2 = new MyObservable();
    observableClass2.observable$.pipe(
      /* ... */
    ).subscribe({
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

    // ex 3: join operators you use in ex 1 and ex 2
    const observableClass3 = new MyObservable();
    observableClass3.observable$.pipe(
      /* ... */
    ).subscribe({
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

    // ex 4: translate numbers into string, use getTranslation method
    const observableClass4 = new MyObservable();
    observableClass4.observable$.pipe(
      /* ... */
    ).subscribe({
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

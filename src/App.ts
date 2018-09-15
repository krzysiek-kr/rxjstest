import { MyObservable } from 'my-observable';
import { map, catchError, filter } from 'rxjs/operators';
import { of } from 'rxjs';

export class App {
  run() {

    // Ex: map each emitted value through transformation 'x + 2', when error occurs return 100, finally filter
    // values greater than 5
    const observableClass = new MyObservable();
    observableClass.observable$.pipe(
      /* ... */
      .subscribe(
        {
          next: x => console.log('got value ' + x),
          error: err => console.error('something wrong occurred: ' + err),
          complete: () => console.log('done'),
        }
      );
  }
}

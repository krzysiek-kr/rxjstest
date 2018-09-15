import { InfiniteObservable1, InfiniteObservable2 } from './unsubsription/unsubscripton';
import { takeUntil } from 'rxjs/internal/operators/takeUntil';
export class App {
  run() {

    // Ex 1: subscribe to InfiniteObservable1 and unsubscribe after 3 seconds
    const obs1 = new InfiniteObservable1();
    const sub1 = obs1.observable$.subscribe({
      next: v => console.log('1st subscriber: ' + v),
      complete: () => console.log('complete')
    });
    /* ... */

    // Ex 2: subscribe to InfiniteObservable2 and unsubscribe when toDestroy$ observable is completed

    const obs2 = new InfiniteObservable2();
    const sub2 = obs2.observable$.pipe(
      /*...*/
    ).subscribe({
      next: v => console.log('1st subscriber: ' + v),
      complete: () => console.log('complete')
    }
    );
    setTimeout(() => {
      obs2.toDestroy$.next();
      obs2.toDestroy$.complete();
    }, 3000);
  }
}

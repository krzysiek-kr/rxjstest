import { HotObservable } from './unsubsription/unsubscripton';
import { takeUntil } from 'rxjs/internal/operators/takeUntil';
import { Subject } from 'rxjs';
export class App {

  toDestroy$ = new Subject();

  run() {
    const obs = new HotObservable();
    const sub1 = obs.observable$.pipe(
      /*...*/
    ).subscribe({
      next: v => console.log('1 subscriber: ' + v),
      complete: () => console.log('complete')
    });

    const sub2 = obs.observable$.pipe(
      /*...*/
    ).subscribe({
      next: v => console.log('2 subscriber: ' + v),
      complete: () => console.log('complete')
    });

    const sub3 = obs.observable$.pipe(
      /*...*/
    ).subscribe({
      next: v => console.log('3 subscriber: ' + v),
      complete: () => console.log('complete')
    });

    setTimeout(() => {
      this.toDestroy$.next();
      this.toDestroy$.complete();
    }, 3000);
  }
}

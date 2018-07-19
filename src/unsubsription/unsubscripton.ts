import { interval } from 'rxjs/internal/observable/interval';
import { Subscription, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/internal/operators/takeUntil';

export class Unsubscription {

  subscription: Subscription;

  // uncomment method to show differences between different ways of unsubscription
  // from infinite source of observable
  constructor() {
    // this.infinite1();
    this.infinite2();
  }

  infinite1() {
    let obs;
    obs = interval(1000);

    this.subscription = obs.subscribe({
      next: v => console.log('1st subscriber: ' + v),
      complete: () => console.log('complete')
    }
    );

    setTimeout(() => this.subscription.unsubscribe(), 3000);
  }

  infinite2() {
    let obs;
    const destroy$ = new Subject();
    obs = interval(1000);

    obs.pipe(takeUntil(destroy$)).subscribe({
      next: v => console.log('1st subscriber: ' + v),
      complete: () => console.log('complete')
    }
    );

    setTimeout(() => {
      destroy$.next();
      destroy$.complete();
    }, 3000);
  }
}

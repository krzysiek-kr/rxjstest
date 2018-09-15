import { interval } from 'rxjs/internal/observable/interval';
import { Subscription, Subject, Observable } from 'rxjs';
import { takeUntil } from 'rxjs/internal/operators/takeUntil';

export class InfiniteObservable1 {

  observable$;
  constructor() {
    this.observable$ = interval(1000);
  }
}

export class InfiniteObservable2 {

  observable$;
  toDestroy$ = new Subject();
  constructor() {
    this.observable$ = interval(1000);
  }
}

import { interval } from 'rxjs/internal/observable/interval';
import { Subscription, Subject, Observable } from 'rxjs';
import { takeUntil } from 'rxjs/internal/operators/takeUntil';

export class HotObservable {

  observable$;
  constructor() {
    this.observable$ = interval(1000);
  }
}

import { Observable, Subscriber } from 'rxjs';
import { publishReplay, refCount } from 'rxjs/operators';

export class Cached {
  static cached$: Observable<number>;

  constructor() {
    Cached.init();
  }

  static init() {
    const observable$ = new Observable<number>((subscriber) => {
      subscriber.next(0);
      subscriber.next(1);
      /* setTimeout(() => {
        subscriber.next(2);
      }, 1000); */
    });
    // this.cached$ = observable$;
    this.cached$ = observable$.pipe(
      publishReplay<number>(1),
      refCount()
    );
  }
}

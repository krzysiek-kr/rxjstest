import { Observable } from 'rxjs';
import { DATA_1, getTranslations } from 'data';
import { map, filter, flatMap } from 'rxjs/operators';

export class MyObservable {

  observable$: Observable<any>;

  constructor() {
    this.observable$ = new Observable<number>((observer) => {
      for (let i = 0; i < DATA_1.length; i++) {
        observer.next(DATA_1[i]);
      }
      observer.complete();
    });
  }

}

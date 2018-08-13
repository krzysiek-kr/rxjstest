import { Observable } from 'rxjs';
import { DATA_1 } from 'data';
import { map, filter } from 'rxjs/operators';

export class MyObservable {

  static observable$: Observable<number>;

  constructor() {
  }

  static init() {
    this.observable$ = new Observable<number>((observer) => {
      for (let i = 0; i < DATA_1.length; i++) {
        observer.next(DATA_1[i]);
      }
      observer.complete();
    });
  }

  static map() {
    this.observable$ = this.observable$.pipe(map<number, number>((value) => {
      return value + 5;
    }));
  }

  static filter() {
    this.observable$ = this.observable$.pipe(filter((value) => {
      return value % 2 === 0;
    }));
  }

  static joinAllOperators() {
    const mapOperation = map<number, number>((value) => {
      return value + 5;
    });
    const filterOperation = filter((value: number) => {
      return value % 2 === 0;
    });

    this.observable$ = this.observable$.pipe(mapOperation, filterOperation);
  }

  static subscribe() {
    this.observable$.subscribe(
      {
        next: x => console.log('got value ' + x),
        error: err => console.error('something wrong occurred: ' + err),
        complete: () => console.log('done'),
      }
    );
  }
}

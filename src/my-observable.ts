import { Observable, of } from 'rxjs';
import { map, catchError} from 'rxjs/operators';

export class MyObservable {

  static observable$: Observable<number>;

  constructor() {
  }

  static init1() {
    this.observable$ = new Observable<number>((observer) => {
      observer.next(1);
      observer.next(2);
      observer.next(3);
      observer.next(4);
      observer.next(5);
    });
  }
  static catchErrors1() {
    const mapOperation = map((value: number) => {
      if (value % 2) {
        throw new Error();
      } else {
        return value;
      }
    });
    const catchOperation = catchError((error) => {
      console.log(error);
      return of(100);
    });

    this.observable$.pipe(mapOperation, catchOperation).subscribe(
      {
        next: x => console.log('got value ' + x),
        error: err => console.error('something wrong occurred: ' + err),
        complete: () => console.log('done'),
      }
    );
  }

  static init2() {
    this.observable$ = new Observable<number>((observer) => {
      observer.next(1);
      observer.next(2);
      observer.next(3);
      observer.next(4);
      observer.error(5);
    });
  }
  static catchErrors2() {
    const catchOperation = catchError((error) => {
      console.log(error);
      return of(100);
    });

    this.observable$.pipe(catchOperation).subscribe(
      {
        next: x => console.log('got value ' + x),
        error: err => console.error('something wrong occurred: ' + err),
        complete: () => console.log('done'),
      }
    );
  }

}

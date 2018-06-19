import { from } from 'rxjs';
export class App {
  run() {
    const data$ = from(['d', 'd', 'e', 'x', 'z', 'e']);
    data$.subscribe((v) => {
      console.log(v);
    });
  }
}

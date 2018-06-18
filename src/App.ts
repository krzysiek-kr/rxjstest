import { from } from 'rxjs';
export class App {
    run() {
        const data$ = from(['d', 'd', 'e', 'x']);
        data$.subscribe((v) => {
            console.log(v);
        });
        
    }
}

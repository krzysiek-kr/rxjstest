import { Unsubscription } from './unsubsription/unsubscripton';
export class App {
  run() {
    console.log('Unsubscribe');
    const unsubscribe = new Unsubscription();
  }
}

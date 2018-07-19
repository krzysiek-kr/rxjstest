import { Cached } from 'cache/cached';
import { CachedObserver } from 'cache/cached-observer';
import { Cold } from './hot_and_cold/cold';
export class App {
  run() {
    console.log('Cache');
    Cached.init();
    const observer1 = new CachedObserver('A');
    let observer2 = new CachedObserver('B');
    observer2 = new CachedObserver('C');
    console.log('Hot&Cold');
    const cold = new Cold();
  }
}

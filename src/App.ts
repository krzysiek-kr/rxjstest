import { Cached } from 'cache/cached';
import { CachedObserver } from 'cache/cached-observer';
export class App {
  run() {
    Cached.init();
    const observer1 = new CachedObserver('A');
    let observer2 = new CachedObserver('B');
    observer2 = new CachedObserver('C');
  }
}

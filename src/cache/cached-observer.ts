import { Cached } from './cached';

export class CachedObserver {
  constructor(private name: string) {
    Cached.cached$.subscribe((value) => {
      console.log(`Observer ${this.name} next value: ${value}`);
    });
  }
}

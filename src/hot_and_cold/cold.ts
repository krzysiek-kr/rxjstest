import { Observable, interval, ConnectableObservable } from 'rxjs';
import { publish } from 'rxjs/internal/operators/publish';
import { refCount } from 'rxjs/internal/operators/refCount';

export class Cold {
  constructor() {
    this.initCold();
  }
  initCold() {
    const obs = Observable.create(observer => observer.next(Date.now()));

    obs.subscribe(v => console.log('1st subscriber: ' + v));
    obs.subscribe(v => console.log('2nd subscriber: ' + v));
    console.log(`The Observable started producing
     the values upon each subscription which makes it cold by definition.`);
    this.warmItUp();
  }

  warmItUp() {
    console.log(`Let's warm it up`);
    const obs = Observable
      .create(observer => observer.next(Date.now()))
      .pipe(publish());

    obs.subscribe(v => console.log('1st subscriber: ' + v));
    obs.subscribe(v => console.log('2nd subscriber: ' + v));

    obs.connect();
    console.log(`it’s warmer than a cold one but colder than a really hot one.
     It’s hot in the sense that there’s no new value producer/source (the thing calling observer.next(val))
      created upon subscription. But it’s cold in the sense that it doesn’t start producing values before
       the subscriptions exist.`);

    this.makeItReallyReallyHot1();
    this.makeItReallyReallyHot2();
  }

  makeItReallyReallyHot1() {
    const obs = Observable
      .create(observer => observer.next(Date.now()))
      .pipe(publish());
    obs.connect();

    obs.subscribe(v => console.log('1st subscriber: ' + v));
    obs.subscribe(v => console.log('2nd subscriber: ' + v));
    console.log(`We don’t see any output at all. And that’s expected behaviour because
     now obs is really really hot as in it produces values no matter if anyone listens or not.`);
  }

  makeItReallyReallyHot2() {
    let obs;
    obs = interval(1000)
      .pipe(publish());
    obs.connect();

    setTimeout(() => {
      obs.subscribe(v => console.log('1st subscriber: ' + v));
    }, 1100);
    setTimeout(() => {
      obs.subscribe(v => console.log('2nd subscriber: ' + v));
    }, 2100);
    console.log(`Clearly, we can see that the subscribers are not starting over at 0.`);
  }
}

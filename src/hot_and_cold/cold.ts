import { Observable, interval } from 'rxjs';
import { publish } from 'rxjs/internal/operators/publish';

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

/*
As we’ve seen the question whether an Observable is hot or cold is everything but black and white.
In fact there are several strategies how values may be pushed to subscribers that we didn’t even touch on yet.
In general we can say that we should be dealing with a hot Observable whenever we subscribe to something that
is generating values no matter if someone is listening or not. When we subscribe to such a hot Observable,
we don’t see past values but only new ones that were generated after our subscription.

A typical example of a hot observable are mousemove events. The mouse moves happen regardless if
someone is listening or not. When we start listening for them, we only get future events.

Cold Observables on the other hand are the lazy ones. They only start producing values when someone subscribes.
But then again, it’s really not a black and white thing.
An iced cold Observable starts reproducing the values it emits independently with every new subscriber
as we’ve seen in the examples above. But how should we call an Observable that only starts generating
values as the first subscriber subscribes and then shares and reemits the exact same values to every
new subscriber? Things get blurry and categorizing only by cold and hot doesn’t really cut it for every possible use case.

As a rule of thumb, when you have a cold Observable and you want multiple subscribers to it,
and you don’t want them to cause regenerating the values but rather reusing existing values, you need to start
thinking about publish and friends.
*/

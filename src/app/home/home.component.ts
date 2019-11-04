import { Component, OnInit, OnDestroy } from '@angular/core';
import { of, Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  private title = 'Home Page';

  private subscription: Subscription;

  private cardWidth = '80%';

  constructor() { }

  ngOnInit() {

  }

  ngOnDestroy() {
    console.log('>>> ngOnDestroy');

    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  clickMe() {
    console.log('You have clicked.');
      /*
      *  'of' allows you to deliver values in a sequence; in this case, it will emit 1,2,3,4,5 in order.
      */
      const dataSource = of(1, 2, 3, 4, 5);

      // subscribe to our source observable
      this.subscription = dataSource.pipe(
        // add 1 to each emitted value
        map(value => value + 1))
        // log: 2, 3, 4, 5, 6
      .subscribe(value => console.log(`Value: ${value}`));
  }
}

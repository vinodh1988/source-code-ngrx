import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { increment, decrement,reset} from '../NgRx/actions';
@Component({
  selector: 'app-counter-displayy',
  templateUrl: './counter-displayy.component.html',
  styleUrl: './counter-displayy.component.css'
})
export class CounterDisplayyComponent {
  count$: Observable<number>;

  constructor(private store:Store<{count:number}>){
      this.count$ = store.pipe(select('count')) //selector
  }

increment() {
    this.store.dispatch(increment())
 }
 decrement() {
   this.store.dispatch(decrement())
 }
 reset() {
   this.store.dispatch(reset())
 }
}

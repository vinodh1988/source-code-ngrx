import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { CounterDisplayyComponent } from './counter-displayy/counter-displayy.component';
import { counterReducer } from './NgRx/reducer';
import { MessageComponent } from './message/message.component';
import { messageReducer } from './NgRx/messagereducer';

@NgModule({
  declarations: [
    AppComponent,
    CounterDisplayyComponent,
    MessageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({
      count: counterReducer,
      messageData: messageReducer//{message:string}
    })
  ,
    EffectsModule.forRoot([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

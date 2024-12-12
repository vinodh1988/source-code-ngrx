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
import { quoteReducer } from './NgRx/quotereducer';
import { QuoteComponent } from './quote/quote.component';
import { QuoteEffects } from './NgRx/quoteeffects';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CounterDisplayyComponent,
    MessageComponent,
    QuoteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    EffectsModule.forRoot([QuoteEffects]),
    StoreModule.forRoot({
      count: counterReducer,
      messageData: messageReducer,//{message:string}
      quote: quoteReducer
    })
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

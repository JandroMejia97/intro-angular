import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OnePartModule } from './one-part/one-part.module';
import { TwoPartModule } from './two-part/two-part.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    OnePartModule,
    TwoPartModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

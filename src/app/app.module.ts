import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { EncapsulatingComponent } from './components/encapsulating/encapsulating.component';
import { GenericComponent } from './components/generic/generic.component'; // <-- NgModel lives here
@NgModule({
  declarations: [
    AppComponent,
    EncapsulatingComponent,
    GenericComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

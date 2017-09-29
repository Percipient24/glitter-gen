import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InputFilterDirective } from './input-filter.directive';
import { GlitterComponent } from './glitter/glitter.component';

@NgModule({
  declarations: [
    AppComponent,
    InputFilterDirective,
    GlitterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

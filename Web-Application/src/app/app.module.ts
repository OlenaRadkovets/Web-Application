import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LanguageComponent } from './language/language.component';
import { EngComponent } from './eng/eng.component';
import { UkrComponent } from './ukr/ukr.component';



@NgModule({
  declarations: [
    AppComponent,
    LanguageComponent,
    EngComponent,
    UkrComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

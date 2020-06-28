import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LanguageComponent } from './language/language.component';
import { EngComponent } from './eng/eng.component';
import { UkrComponent } from './ukr/ukr.component';



const routes: Routes = [
  {path: '', redirectTo: 'language', pathMatch: 'full'},
  {path: 'language', component: LanguageComponent},
  {path: 'language/eng', component: EngComponent},
  {path: 'language/ukr', component: UkrComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

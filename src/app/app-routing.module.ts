import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home';
import { SeminarComponent } from './seminar';
import { IgComponent } from './ig';
import { SouvenirComponent } from './souvenir';
import { ExpoComponent } from './expo';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'seminar', component: SeminarComponent },
  { path: 'ig', component: IgComponent },
  { path: 'souvenir', component: SouvenirComponent },
  { path: 'expo', component: ExpoComponent },
  //otherwise redirect to home
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

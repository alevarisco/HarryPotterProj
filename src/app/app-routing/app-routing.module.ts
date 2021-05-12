import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavigationComponent } from '../shared/navigation/navigation.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { PersonajesComponent } from '../view/personajes/personajes.component';
import { ProfesoresComponent } from '../view/profesores/profesores.component';

const routes: Routes = [

  {
    path: '',
    component: DashboardComponent,
  },
  {
    path: 'personajes',
    component: PersonajesComponent
  },
  {
    path: 'profesores',
    component: ProfesoresComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [
    RouterModule, 
    BrowserModule
  ]
})
export class AppRoutingModule { }

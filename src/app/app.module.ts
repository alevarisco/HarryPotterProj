import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';


import { AppRoutingModule } from './app-routing/app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './shared/navigation/navigation.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/compiler';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PersonajesComponent } from './view/personajes/personajes.component';
import { EstudiantesComponent } from './view/estudiantes/estudiantes.component';
import { ProfesoresComponent } from './view/profesores/profesores.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NavigationComponent,
    PersonajesComponent,
    EstudiantesComponent,
    ProfesoresComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'home/:hash', component: DashboardComponent }
        ])
  ],
  providers: [],
  bootstrap: [AppComponent],
  
})
export class AppModule { }

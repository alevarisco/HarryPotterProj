import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule, HttpHeaders } from "@angular/common/http";
import { Observable, pipe } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ProcessHttpMessageService } from './process-http-message.service';
import { Persona } from '../class/persona';



@Injectable({
  providedIn: 'root'
})
export class PersonajesService {

  constructor(
    private http: HttpClient,
    private processHTTPMessageService: ProcessHttpMessageService) {
   }

   /* Consulta a la API de los estudiantes de una casa */
   getCasa(nombreCasa): Observable<any>{
     return this.http.get('http://hp-api.herokuapp.com/api/characters/house/' + nombreCasa)
     .pipe(catchError(this.processHTTPMessageService.handleError));
  }

  /* Consulta a la API de los los profesores */
  getProfesores(): Observable<any>{
    return this.http.get('http://hp-api.herokuapp.com/api/characters/staff')
    .pipe(catchError(this.processHTTPMessageService.handleError));
  }

  /* Consulta a la API de los los profesores */
  getEstudiantes(): Observable<any>{
    return this.http.get('http://hp-api.herokuapp.com/api/characters/students')
    .pipe(catchError(this.processHTTPMessageService.handleError));
  }

  /* Agrega estudiantes nuevos al json-server */
  postEstudiante(estudiante): Observable<Persona>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.http.post<Persona>('http://localhost:3000/persona', estudiante, httpOptions);
  }

  /* Consulta a la API de los los estudiantes nuevos */
  getEstudiantesNuevos(): Observable<any>{
    return this.http.get('http://localhost:3000/persona')
    .pipe(catchError(this.processHTTPMessageService.handleError));
  }

}

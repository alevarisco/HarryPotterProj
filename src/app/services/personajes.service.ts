import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { Observable, pipe } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ProcessHttpMessageService } from './process-http-message.service';



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
}

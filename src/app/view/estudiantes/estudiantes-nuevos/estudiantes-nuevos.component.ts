import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Persona } from 'src/app/class/persona';
import { PersonajesService } from 'src/app/services/personajes.service';

@Component({
  selector: 'app-estudiantes-nuevos',
  templateUrl: './estudiantes-nuevos.component.html',
  styleUrls: ['./estudiantes-nuevos.component.css']
})
export class EstudiantesNuevosComponent implements OnInit {

  personajes: Persona[];
  currentYear: number = new Date().getFullYear();

  constructor(
    public personajesService: PersonajesService,
    public router:Router,
    public Activatedroute: ActivatedRoute,
    public fb: FormBuilder
    ) { }
  

  ngOnInit(): void {
    this.personajesService.getEstudiantesNuevos().subscribe(data => {
      this.personajes =  data as Persona[];
      
     console.log(data)
   })
  }

}

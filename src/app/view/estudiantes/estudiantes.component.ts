import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Persona } from 'src/app/class/persona';
import { PersonajesService } from 'src/app/services/personajes.service';
import {NgbDateStruct, NgbCalendar} from '@ng-bootstrap/ng-bootstrap';
import { Wand } from 'src/app/class/wand';

@Component({
  selector: 'app-estudiantes',
  templateUrl: './estudiantes.component.html',
  styleUrls: ['./estudiantes.component.css']
})
export class EstudiantesComponent implements OnInit {

  personajes: Persona[];
  estudiante: Persona = {
    wand: {}
  };
  currentYear: number = new Date().getFullYear();
  casaSeleccionada: string = '';
  model: NgbDateStruct;
  nombre: String;

/* Form */

  studentForm:FormGroup;
  @ViewChild('leform') studentFormDirective;


  constructor(public personajesService: PersonajesService,
    public router:Router,
    public Activatedroute: ActivatedRoute,
    public fb: FormBuilder) {

    }

  ngOnInit(): void {

    this.personajesService.getEstudiantes().subscribe(data => {
      this.personajes =  data as Persona[];
      
     console.log(data)
   })

   this.studentForm = new FormGroup({
    name: new FormControl(''),
    patronus: new FormControl(''),
    alive: new FormControl(''),
    ancestry: new FormControl(''),
    dateOfBirth: new FormControl(''),
    eyeColour: new FormControl(''),
    gender: new FormControl(''),
    casa: new FormControl(''),
    actor: new FormControl(''),
    hairColour: new FormControl(''),
    image: new FormControl(''),
    species: new FormControl(''),
    core: new FormControl(''),
    longitud: new FormControl(''),
    wood: new FormControl('')
  });

  }

  /* Chequea si esta seleccionado un valor en el dropdown */
  selectChangeHandler (event: any) {
    this.casaSeleccionada = event.target.value;
    console.log(this.casaSeleccionada)
    this.personajesService.getCasa(this.casaSeleccionada).subscribe(data => {
      this.personajes =  data as Persona[];
      
     console.log(data)
   })
    }


    onSubmit(){
      
      this.estudiante.name = this.studentForm.value.name;
      this.estudiante.alive = this.studentForm.value.alive;
      this.estudiante.patronus = this.studentForm.value.patronus;
      this.estudiante.ancestry = this.studentForm.value.ancestry;
      this.estudiante.dateOfBirth = 
        this.studentForm.value.dateOfBirth.day +  "-" +
        this.studentForm.value.dateOfBirth.month +  "-" +
        this.studentForm.value.dateOfBirth.year ;
      this.estudiante.eyeColour = this.studentForm.value.eyeColour;
      this.estudiante.gender = this.studentForm.value.gender;
      this.estudiante.hogwartsStaff = false;
      this.estudiante.hogwartsStudent = true;
      this.estudiante.yearOfBirth = this.studentForm.value.dateOfBirth.year ;
      this.estudiante.house = this.studentForm.value.casa;
      this.estudiante.actor = this.studentForm.value.actor;
      this.estudiante.hairColour = this.studentForm.value.hairColour;
      this.estudiante.image = this.studentForm.value.image;
      this.estudiante.species = this.studentForm.value.species;
      this.estudiante.wand.core = this.studentForm.value.core;
      this.estudiante.wand.longitud = this.studentForm.value.longitud;
      this.estudiante.wand.wood = this.studentForm.value.wood;
      
      console.log(this.estudiante)
      console.warn(this.studentForm.value);

      this.personajesService.postEstudiante(this.estudiante).subscribe((res)=>{
        this.router.navigate(['/estudiantes/nuevos'])
      });
    }

}

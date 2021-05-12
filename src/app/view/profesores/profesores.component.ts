import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Persona } from 'src/app/class/persona';
import { PersonajesService } from "../../services/personajes.service";


@Component({
  selector: 'app-profesores',
  templateUrl: './profesores.component.html',
  styleUrls: ['./profesores.component.css']
})
export class ProfesoresComponent implements OnInit {

  personajes: Persona[];

  today = Date.now();

  constructor(
    public personajesService: PersonajesService,
    public router:Router,
    public Activatedroute: ActivatedRoute,
    public fb: FormBuilder
    ) { }
  

  ngOnInit(): void {
    this.personajesService.getProfesores().subscribe(data => {
      this.personajes =  data as Persona[];
      
     console.log(data)
   })
  }

  // calcularEdad(){
  //   if(this.personajes){
      
  //   }
  // }

}

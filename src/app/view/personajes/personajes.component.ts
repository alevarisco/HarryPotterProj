import { Component, OnInit, ViewChild} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Persona } from 'src/app/class/persona';
import { PersonajesService } from "../../services/personajes.service";



@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent implements OnInit {

  casaSeleccionada: string = '';
  personajes: Persona[];
  currentYear: number = new Date().getFullYear();



  constructor(
    public fb: FormBuilder,
    public personajesService: PersonajesService,
    public router:Router,
    public Activatedroute: ActivatedRoute,
    ) {
      // this.currentYear=new Date("YYYY");
     }

    
  ngOnInit(): void {
    // this.personajesService.getCasa('slytherin').subscribe(data => {
    //   this.personajes =  data as Persona[];
    //  console.log(data)
  //  })
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
}

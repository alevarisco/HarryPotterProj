import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  /* Llamada al componente de Personajes */
  viewPersonajes(){
    this.router.navigate(['/personajes'])
//, { queryParams: { pregunta: pregunta, correo: correo} }
}

/* Llamada al componente de Profesores */
  viewProfesores(){
    this.router.navigate(['/profesores'])
  }

}

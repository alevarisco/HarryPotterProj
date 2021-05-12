import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  /* Llamada al componente de Personajes */
  viewPersonajes(){
    this.router.navigate(['/personajes'])
//, { queryParams: { pregunta: pregunta, correo: correo} }
  }
}

import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
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
  }

  /* Llamada al componente de Profesores */
  viewProfesores(){
    this.router.navigate(['/profesores'])
  }
}

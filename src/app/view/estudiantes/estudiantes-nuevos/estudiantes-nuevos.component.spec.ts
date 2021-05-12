import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstudiantesNuevosComponent } from './estudiantes-nuevos.component';

describe('EstudiantesNuevosComponent', () => {
  let component: EstudiantesNuevosComponent;
  let fixture: ComponentFixture<EstudiantesNuevosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstudiantesNuevosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EstudiantesNuevosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

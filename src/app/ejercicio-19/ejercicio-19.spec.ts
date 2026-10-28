import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Ejercicio19 } from './ejercicio-19';

describe('Ejercicio19', () => {
  let component: Ejercicio19;
  let fixture: ComponentFixture<Ejercicio19>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ejercicio19],
    }).compileComponents();

    fixture = TestBed.createComponent(Ejercicio19);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

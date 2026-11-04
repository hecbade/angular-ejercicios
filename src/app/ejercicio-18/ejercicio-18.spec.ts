import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Ejercicio18 } from './ejercicio-18';

describe('Ejercicio18', () => {
  let component: Ejercicio18;
  let fixture: ComponentFixture<Ejercicio18>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ejercicio18],
    }).compileComponents();

    fixture = TestBed.createComponent(Ejercicio18);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

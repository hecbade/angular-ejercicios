import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Ejercicio20 } from './ejercicio-20';

describe('Ejercicio20', () => {
  let component: Ejercicio20;
  let fixture: ComponentFixture<Ejercicio20>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ejercicio20],
    }).compileComponents();

    fixture = TestBed.createComponent(Ejercicio20);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

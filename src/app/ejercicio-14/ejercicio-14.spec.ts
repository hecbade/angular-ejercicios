import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Ejercicio14 } from './ejercicio-14';

describe('Ejercicio14', () => {
  let component: Ejercicio14;
  let fixture: ComponentFixture<Ejercicio14>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ejercicio14],
    }).compileComponents();

    fixture = TestBed.createComponent(Ejercicio14);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

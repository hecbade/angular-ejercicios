import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Izquierda } from './izquierda';

describe('Izquierda', () => {
  let component: Izquierda;
  let fixture: ComponentFixture<Izquierda>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Izquierda],
    }).compileComponents();

    fixture = TestBed.createComponent(Izquierda);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

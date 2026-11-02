import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Derecha } from './derecha';

describe('Derecha', () => {
  let component: Derecha;
  let fixture: ComponentFixture<Derecha>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Derecha],
    }).compileComponents();

    fixture = TestBed.createComponent(Derecha);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Adicional } from './adicional';

describe('Adicional', () => {
  let component: Adicional;
  let fixture: ComponentFixture<Adicional>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Adicional],
    }).compileComponents();

    fixture = TestBed.createComponent(Adicional);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

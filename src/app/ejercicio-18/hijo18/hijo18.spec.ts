import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Hijo18 } from './hijo18';

describe('Hijo18', () => {
  let component: Hijo18;
  let fixture: ComponentFixture<Hijo18>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Hijo18],
    }).compileComponents();

    fixture = TestBed.createComponent(Hijo18);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

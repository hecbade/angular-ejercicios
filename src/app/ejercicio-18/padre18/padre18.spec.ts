import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Padre18 } from './padre18';

describe('Padre18', () => {
  let component: Padre18;
  let fixture: ComponentFixture<Padre18>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Padre18],
    }).compileComponents();

    fixture = TestBed.createComponent(Padre18);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

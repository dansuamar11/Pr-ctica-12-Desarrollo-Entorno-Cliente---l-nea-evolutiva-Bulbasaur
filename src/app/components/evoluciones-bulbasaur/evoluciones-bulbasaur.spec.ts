import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvolucionesBulbasaur } from './evoluciones-bulbasaur';

describe('EvolucionesBulbasaur', () => {
  let component: EvolucionesBulbasaur;
  let fixture: ComponentFixture<EvolucionesBulbasaur>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EvolucionesBulbasaur]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EvolucionesBulbasaur);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

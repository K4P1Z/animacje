import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Animacja5 } from './animacja5';

describe('Animacja5', () => {
  let component: Animacja5;
  let fixture: ComponentFixture<Animacja5>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Animacja5]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Animacja5);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

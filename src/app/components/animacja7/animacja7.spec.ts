import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Animacja7 } from './animacja7';

describe('Animacja7', () => {
  let component: Animacja7;
  let fixture: ComponentFixture<Animacja7>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Animacja7]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Animacja7);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

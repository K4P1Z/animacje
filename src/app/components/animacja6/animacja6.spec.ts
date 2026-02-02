import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Animacja6 } from './animacja6';

describe('Animacja6', () => {
  let component: Animacja6;
  let fixture: ComponentFixture<Animacja6>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Animacja6]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Animacja6);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

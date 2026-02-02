import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Animacja12 } from './animacja12';

describe('Animacja12', () => {
  let component: Animacja12;
  let fixture: ComponentFixture<Animacja12>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Animacja12]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Animacja12);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Animacja3 } from './animacja3';

describe('Animacja3', () => {
  let component: Animacja3;
  let fixture: ComponentFixture<Animacja3>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Animacja3]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Animacja3);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

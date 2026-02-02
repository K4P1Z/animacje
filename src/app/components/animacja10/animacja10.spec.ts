import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Animacja10 } from './animacja10';

describe('Animacja10', () => {
  let component: Animacja10;
  let fixture: ComponentFixture<Animacja10>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Animacja10]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Animacja10);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

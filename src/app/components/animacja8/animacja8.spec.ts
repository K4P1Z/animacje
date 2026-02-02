import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Animacja8 } from './animacja8';

describe('Animacja8', () => {
  let component: Animacja8;
  let fixture: ComponentFixture<Animacja8>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Animacja8]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Animacja8);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

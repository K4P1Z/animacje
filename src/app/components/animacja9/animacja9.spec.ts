import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Animacja9 } from './animacja9';

describe('Animacja9', () => {
  let component: Animacja9;
  let fixture: ComponentFixture<Animacja9>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Animacja9]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Animacja9);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

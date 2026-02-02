import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Animacja4 } from './animacja4';

describe('Animacja4', () => {
  let component: Animacja4;
  let fixture: ComponentFixture<Animacja4>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Animacja4]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Animacja4);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

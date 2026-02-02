import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Animacja11 } from './animacja11';

describe('Animacja11', () => {
  let component: Animacja11;
  let fixture: ComponentFixture<Animacja11>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Animacja11]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Animacja11);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

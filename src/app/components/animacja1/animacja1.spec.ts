import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Animacja1 } from './animacja1';

describe('Animacja1', () => {
  let component: Animacja1;
  let fixture: ComponentFixture<Animacja1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Animacja1]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Animacja1);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

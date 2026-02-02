import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Animacja2 } from './animacja2';

describe('Animacja2', () => {
  let component: Animacja2;
  let fixture: ComponentFixture<Animacja2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Animacja2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Animacja2);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

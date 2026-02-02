import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Animacja13 } from './animacja13';

describe('Animacja13', () => {
  let component: Animacja13;
  let fixture: ComponentFixture<Animacja13>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Animacja13]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Animacja13);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

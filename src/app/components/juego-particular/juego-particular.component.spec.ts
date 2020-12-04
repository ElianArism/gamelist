import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JuegoParticularComponent } from './juego-particular.component';

describe('JuegoParticularComponent', () => {
  let component: JuegoParticularComponent;
  let fixture: ComponentFixture<JuegoParticularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JuegoParticularComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JuegoParticularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

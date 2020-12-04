import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JuegoDetalleComponent } from './juego-detalle.component';

describe('JuegoDetalleComponent', () => {
  let component: JuegoDetalleComponent;
  let fixture: ComponentFixture<JuegoDetalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JuegoDetalleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JuegoDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

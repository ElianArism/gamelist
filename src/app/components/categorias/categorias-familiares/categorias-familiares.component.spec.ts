import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriasFamiliaresComponent } from './categorias-familiares.component';

describe('CategoriasFamiliaresComponent', () => {
  let component: CategoriasFamiliaresComponent;
  let fixture: ComponentFixture<CategoriasFamiliaresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoriasFamiliaresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriasFamiliaresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

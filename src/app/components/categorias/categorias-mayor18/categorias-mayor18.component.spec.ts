import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriasMayor18Component } from './categorias-mayor18.component';

describe('CategoriasMayor18Component', () => {
  let component: CategoriasMayor18Component;
  let fixture: ComponentFixture<CategoriasMayor18Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoriasMayor18Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriasMayor18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

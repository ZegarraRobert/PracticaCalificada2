import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltroProductos } from './filtro-productos';

describe('FiltroProductos', () => {
  let component: FiltroProductos;
  let fixture: ComponentFixture<FiltroProductos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FiltroProductos],
    }).compileComponents();

    fixture = TestBed.createComponent(FiltroProductos);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

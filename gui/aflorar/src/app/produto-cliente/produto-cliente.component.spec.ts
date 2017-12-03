import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutoClienteComponent } from './produto-cliente.component';

describe('ProdutoClienteComponent', () => {
  let component: ProdutoClienteComponent;
  let fixture: ComponentFixture<ProdutoClienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProdutoClienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdutoClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

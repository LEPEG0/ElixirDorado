import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComprasVistasComponent } from './compras-vistas.component';

describe('ComprasVistasComponent', () => {
  let component: ComprasVistasComponent;
  let fixture: ComponentFixture<ComprasVistasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComprasVistasComponent]
    });
    fixture = TestBed.createComponent(ComprasVistasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

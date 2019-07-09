import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalRendaComponent } from './modal-renda.component';

describe('ModalRendaComponent', () => {
  let component: ModalRendaComponent;
  let fixture: ComponentFixture<ModalRendaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalRendaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalRendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

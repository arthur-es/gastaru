import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalprofileComponent } from './modalprofile.component';

describe('ModalprofileComponent', () => {
  let component: ModalprofileComponent;
  let fixture: ComponentFixture<ModalprofileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalprofileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

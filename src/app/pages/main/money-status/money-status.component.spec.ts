import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoneyStatusComponent } from './money-status.component';

describe('MoneyStatusComponent', () => {
  let component: MoneyStatusComponent;
  let fixture: ComponentFixture<MoneyStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoneyStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoneyStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

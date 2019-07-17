import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlterformComponent } from './alterform.component';

describe('AlterformComponent', () => {
  let component: AlterformComponent;
  let fixture: ComponentFixture<AlterformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlterformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlterformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

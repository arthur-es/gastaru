import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntryFormAttComponent } from './entry-form-att.component';

describe('EntryFormAttComponent', () => {
  let component: EntryFormAttComponent;
  let fixture: ComponentFixture<EntryFormAttComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntryFormAttComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntryFormAttComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

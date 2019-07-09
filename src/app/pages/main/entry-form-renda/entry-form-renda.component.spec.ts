import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntryFormRendaComponent } from './entry-form-renda.component';

describe('EntryFormRendaComponent', () => {
  let component: EntryFormRendaComponent;
  let fixture: ComponentFixture<EntryFormRendaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntryFormRendaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntryFormRendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

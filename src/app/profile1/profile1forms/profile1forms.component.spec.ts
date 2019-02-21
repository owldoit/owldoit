import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Profile1formsComponent } from './profile1forms.component';

describe('Profile1formsComponent', () => {
  let component: Profile1formsComponent;
  let fixture: ComponentFixture<Profile1formsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Profile1formsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Profile1formsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

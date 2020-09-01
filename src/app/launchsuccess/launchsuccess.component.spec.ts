import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaunchsuccessComponent } from './launchsuccess.component';

describe('LaunchsuccessComponent', () => {
  let component: LaunchsuccessComponent;
  let fixture: ComponentFixture<LaunchsuccessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaunchsuccessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaunchsuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttendanceUpgradeComponent } from './attendance-upgrade.component';

describe('AttendanceUpgradeComponent', () => {
  let component: AttendanceUpgradeComponent;
  let fixture: ComponentFixture<AttendanceUpgradeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttendanceUpgradeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttendanceUpgradeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

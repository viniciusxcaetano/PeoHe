import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AttendanceListComponent } from './attendance-list.component';
import { AttendanceService } from '../attendance.service';

describe('AttendanceListComponent', () => {
  let component: AttendanceListComponent;
  let fixture: ComponentFixture<AttendanceListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AttendanceListComponent],
      imports: [FormsModule, HttpClientTestingModule, RouterTestingModule],
      providers: [AttendanceService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttendanceListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

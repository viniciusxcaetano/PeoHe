import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AttendanceEditComponent } from './attendance-edit.component';
import { AttendanceService } from '../attendance.service';

describe('AttendanceEditComponent', () => {
  let component: AttendanceEditComponent;
  let fixture: ComponentFixture<AttendanceEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AttendanceEditComponent],
      imports: [FormsModule, HttpClientTestingModule, RouterTestingModule],
      providers: [AttendanceService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttendanceEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

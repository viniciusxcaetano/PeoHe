import { Component, OnInit } from '@angular/core';
import { AttendanceFilter } from '../attendance-filter';
import { AttendanceService } from '../attendance.service';
import { Attendance } from '../attendance';

@Component({
  selector: 'app-attendance',
  templateUrl: 'attendance-list.component.html'
})
export class AttendanceListComponent implements OnInit {

  filter = new AttendanceFilter();
  selectedAttendance: Attendance;
  feedback: any = {};

  get attendanceList(): Attendance[] {
    return this.attendanceService.attendanceList;
  }

  constructor(private attendanceService: AttendanceService) {
  }

  ngOnInit() {
    this.search();
  }

  search(): void {
    this.attendanceService.load(this.filter);
  }

  select(selected: Attendance): void {
    this.selectedAttendance = selected;
  }

  delete(attendance: Attendance): void {
    if (confirm('Are you sure?')) {
      this.attendanceService.delete(attendance).subscribe(() => {
        this.feedback = { type: 'success', message: 'Delete was successful!' };
        setTimeout(() => {
          this.search();
        }, 1000);
      },
        err => {
          this.feedback = { type: 'warning', message: 'Error deleting.' };
        }
      );
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { Attendance } from 'src/app/core/model/Attendance';
import { AttendanceService } from '../attendance.service';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-attendances',
  templateUrl: './attendances.component.html',
  styleUrls: ['./attendances.component.css']
})
export class AttendancesComponent implements OnInit {

  selectedAttendances: Attendance;
  attendances: Attendance[];
  loading: boolean;

  constructor(private attendanceService: AttendanceService) { }

  ngOnInit() {
    this.getAttendances();
  }

  getAttendances() {
    this.loading = true;
    this.attendanceService
      .getAttendances()
      .pipe(finalize(() => (this.loading = false)))
      .subscribe(attendances => (this.attendances = attendances));
    this.unselect();
  }

  unselect() {
    this.selectedAttendances = null;
  }
}
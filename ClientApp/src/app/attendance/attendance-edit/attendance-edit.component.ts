import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { AttendanceService } from '../attendance.service';
import { Attendance } from '../attendance';
import { map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-attendance-edit',
  templateUrl: './attendance-edit.component.html'
})
export class AttendanceEditComponent implements OnInit {

  id: string;
  attendance: Attendance;
  feedback: any = {};

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private attendanceService: AttendanceService) {
  }

  ngOnInit() {
    this
      .route
      .params
      .pipe(
        map(p => p.id),
        switchMap(id => {
          if (id === 'new') { return of(new Attendance()); }
          return this.attendanceService.findById(id);
        })
      )
      .subscribe(attendance => {
          this.attendance = attendance;
          this.feedback = {};
        },
        err => {
          this.feedback = {type: 'warning', message: 'Error loading'};
        }
      );
  }

  save() {
    this.attendanceService.save(this.attendance).subscribe(
      attendance => {
        this.attendance = attendance;
        this.feedback = {type: 'success', message: 'Save was successful!'};
        setTimeout(() => {
          this.router.navigate(['/attendances']);
        }, 1000);
      },
      err => {
        this.feedback = {type: 'warning', message: 'Error saving'};
      }
    );
  }

  cancel() {
    this.router.navigate(['/attendances']);
  }
}

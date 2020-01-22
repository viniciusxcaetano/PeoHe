import { Routes } from '@angular/router';
import { AttendanceListComponent } from './attendance-list/attendance-list.component';
import { AttendanceEditComponent } from './attendance-edit/attendance-edit.component';

export const Attendance_ROUTES: Routes = [
  {
    path: 'attendances',
    component: AttendanceListComponent
  },
  {
    path: 'attendances/:id',
    component: AttendanceEditComponent
  }
];

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AttendanceListComponent } from './attendance-list/attendance-list.component';
import { AttendanceEditComponent } from './attendance-edit/attendance-edit.component';
import { AttendanceService } from './attendance.service';
import { Attendance_ROUTES } from './attendance.routes';
import {MatSelectModule} from '@angular/material/select';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatSelectModule,
    RouterModule.forChild(Attendance_ROUTES)
  ],
  declarations: [
    AttendanceListComponent,
    AttendanceEditComponent
  ],
  providers: [AttendanceService],
  exports: []
})
export class AttendanceModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AttendanceListComponent } from './attendance-list/attendance-list.component';
import { AttendanceEditComponent } from './attendance-edit/attendance-edit.component';
import { AttendanceService } from './attendance.service';
import { Attendance_ROUTES } from './attendance.routes';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DropdownModule } from 'primeng/dropdown';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,

    BrowserModule,
    BrowserAnimationsModule,
    DropdownModule,

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

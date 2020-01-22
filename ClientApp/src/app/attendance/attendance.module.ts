import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AttendanceListComponent } from './attendance-list/attendance-list.component';
import { AttendanceEditComponent } from './attendance-edit/attendance-edit.component';



@NgModule({
  declarations: [AttendanceListComponent, AttendanceEditComponent],
  imports: [
    CommonModule
  ]
})
export class AttendanceModule { }

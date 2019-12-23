import { AttendancesComponent } from "./attendances/attendances.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SharedModule } from "../shared/shared.module";
import { AttendancesRoutingModule } from "./attendances-routing.module";
import { AttendanceService } from "./attendance.service";
import { AttendanceListComponent } from "./attendance-list/attendance-list.component";
import { AttendanceDetailComponent } from "./attendance-detail/attendance-detail.component";

@NgModule({
  imports: [CommonModule, SharedModule, AttendancesRoutingModule],
  exports: [AttendancesComponent, AttendanceDetailComponent],
  declarations: [AttendancesComponent, AttendanceDetailComponent, AttendanceListComponent],
  providers: [AttendanceService]
})
export class AttendancesModule { }
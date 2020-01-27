import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ClinicListComponent } from './clinic-list/clinic-list.component';
import { ClinicEditComponent } from './clinic-edit/clinic-edit.component';
import { ClinicService } from './clinic.service';
import { CLINIC_ROUTES } from './clinic.routes';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(CLINIC_ROUTES)
  ],
  declarations: [
    ClinicListComponent,
    ClinicEditComponent
  ],
  providers: [ClinicService],
  exports: []
})
export class ClinicModule { }

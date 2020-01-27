import { Routes } from '@angular/router';
import { ClinicListComponent } from './clinic-list/clinic-list.component';
import { ClinicEditComponent } from './clinic-edit/clinic-edit.component';

export const CLINIC_ROUTES: Routes = [
  {
    path: 'clinics',
    component: ClinicListComponent
  },
  {
    path: 'clinics/:id',
    component: ClinicEditComponent
  }
];

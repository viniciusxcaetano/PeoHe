import { Component, OnInit, NgModule } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { AttendanceService } from '../attendance.service';
import { Attendance } from '../attendance';
import { map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { ClinicService } from 'src/app/clinic/clinic.service';
import { Clinic } from 'src/app/clinic/clinic';
import { SelectItem } from 'primeng/api';

@Component({
  selector: 'app-attendance-edit',
  templateUrl: './attendance-edit.component.html'
})
@NgModule({
  imports: [
  ]
})
export class AttendanceEditComponent implements OnInit {

  id: string;
  attendance: Attendance;
  clinics2: Clinic[];
  clinics: SelectItem[];
  selectedClinic: Clinic;
  feedback: any = {};

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private attendanceService: AttendanceService,
    private clinicService: ClinicService) {
  }

  ngOnInit() {
    this
      .route
      .params
      .pipe(
        map(p => p.id),
        switchMap(id => {
          if (id === 'new') {
            this.clinicService.getClinics().subscribe(clinics =>
              this.clinics2 = clinics);
            return of(new Attendance());
          }
          return this.attendanceService.findById(id);
        })
      )
      .subscribe(attendance => {
        this.attendance = attendance;
        this.feedback = {};
      },
        err => {
          this.feedback = { type: 'warning', message: 'Erro ao carregar' };
        }
      );
  }
  chosenClinic() {
    console.log(this.selectedClinic);
  }

  save() {
    console.log("save");
    // this.attendance.clinicId = this.selectedClinic.clinicId;
    // this.attendanceService.save(this.attendance).subscribe(
    //   attendance => {
    //     this.attendance = attendance;
    //     this.feedback = { type: 'success', message: 'Salvo com sucesso!' };
    //     setTimeout(() => {
    //       this.router.navigate(['/attendances']);
    //     }, 1000);
    //   },
    //   err => {
    //     this.feedback = { type: 'warning', message: 'Erro ao salvar' };
    //   }
    // );
  }

  cancel() {
    this.router.navigate(['/attendances']);
  }

}
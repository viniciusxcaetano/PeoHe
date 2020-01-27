import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { ClinicService } from '../clinic.service';
import { Clinic } from '../clinic';
import { map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-clinic-edit',
  templateUrl: './clinic-edit.component.html'
})
export class ClinicEditComponent implements OnInit {

  id: string;
  clinic: Clinic;
  feedback: any = {};

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private clinicService: ClinicService) {
  }

  ngOnInit() {
    this
      .route
      .params
      .pipe(
        map(p => p.id),
        switchMap(id => {
          if (id === 'new') { return of(new Clinic()); }
          return this.clinicService.findById(id);
        })
      )
      .subscribe(clinic => {
        this.clinic = clinic;
        this.feedback = {};
      },
        err => {
          this.feedback = { type: 'warning', message: 'Erro ao carregar' };
        }
      );
  }

  save() {
    this.clinicService.save(this.clinic).subscribe(
      clinic => {
        this.clinic = clinic;
        this.feedback = { type: 'success', message: 'Salvo com sucesso!' };
        setTimeout(() => {
          this.router.navigate(['/clinics']);
        }, 1000);
      },
      err => {
        this.feedback = { type: 'warning', message: 'Erro ao salvar' };
      }
    );
  }

  cancel() {
    this.router.navigate(['/clinics']);
  }
}

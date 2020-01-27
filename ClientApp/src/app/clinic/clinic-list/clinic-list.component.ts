import { Component, OnInit } from '@angular/core';
import { ClinicFilter } from '../clinic-filter';
import { ClinicService } from '../clinic.service';
import { Clinic } from '../clinic';

@Component({
  selector: 'app-clinic',
  templateUrl: 'clinic-list.component.html'
})
export class ClinicListComponent implements OnInit {

  filter = new ClinicFilter();
  selectedClinic: Clinic;
  feedback: any = {};

  get clinicList(): Clinic[] {
    return this.clinicService.clinicList;
  }

  constructor(private clinicService: ClinicService) {
  }

  ngOnInit() {
    this.search();
  }

  search(): void {
    this.clinicService.load(this.filter);
  }

  select(selected: Clinic): void {
    this.selectedClinic = selected;
  }

  delete(clinic: Clinic): void {
    if (confirm('Você tem certeza?')) {
      this.clinicService.delete(clinic).subscribe(() => {
        this.feedback = { type: 'success', message: 'Excluído com sucesso!' };
        setTimeout(() => {
          this.search();
        }, 1000);
      },
        err => {
          this.feedback = { type: 'warning', message: 'Erro ao excluir' };
        }
      );
    }
  }

}
import { Clinic } from './clinic';
import { ClinicFilter } from './clinic-filter';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

const headers = new HttpHeaders().set('Accept', 'application/json');

@Injectable()
export class ClinicService {

  clinicList: Clinic[] = [];
  api = 'https://localhost:44348/api/clinic/';

  constructor(private http: HttpClient) {
  }

  findById(clinicId: string): Observable<Clinic> {
    const url = `${this.api}GetClinic`;
    const params = { clinicId: clinicId };
    return this.http.get<Clinic>(url, { params, headers });
  }

  load(filter?: ClinicFilter): void {
    this.find(filter).subscribe(result => {
      this.clinicList = result;
    },
      err => {
        console.error('Erro ao carregar', err);
      }
    );
  }

  find(filter: ClinicFilter): Observable<Clinic[]> {
    let params = {
      'name': filter.name,
    };
    return this.http.get<Clinic[]>(`${this.api}GetClinics`, { params, headers });
  }

  getClinics(): Observable<Clinic[]> {
    return this.http.get<Clinic[]>(`${this.api}GetClinics`, { headers });
  }

  save(clinic: Clinic): Observable<Clinic> {
    if (clinic.clinicId) {
      return this.http.post<Clinic>(`${this.api}UpdateClinic`, clinic, { headers });
    } else {
      return this.http.post<Clinic>(`${this.api}CreateClinic`, clinic, { headers });
    }
  }

  delete(clinic: Clinic): Observable<Clinic> {
    if (clinic.clinicId) {
      const params = new HttpParams().set('clinicId', clinic.clinicId.toString());
      return this.http.delete<Clinic>(`${this.api}DeleteClinic`, { headers, params });
    }
    return null;
  }
}
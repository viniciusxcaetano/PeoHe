import { Attendance } from './attendance';
import { AttendanceFilter } from './attendance-filter';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable()
export class AttendanceService {
  attendanceList: Attendance[] = [];

  constructor(private http: HttpClient) {
  }

  findById(id: string): Observable<Attendance> {
    const url = `http://www.angular.at/api/flight/${id}`;
    const params = { 'id': id };
    const headers = new HttpHeaders().set('Accept', 'application/json');
    return this.http.get<Attendance>(url, { params, headers });
  }

  load(filter: AttendanceFilter): void {
    this.find(filter).subscribe(result => {
      this.attendanceList = result;
    },
      err => {
        console.error('error loading', err);
      }
    );
  }

  find(filter: AttendanceFilter): Observable<Attendance[]> {
    const url = `http://www.angular.at/api/flight`;
    const headers = new HttpHeaders().set('Accept', 'application/json');

    const params = {
      'from': filter.from,
      'to': filter.to,
    };

    return this.http.get<Attendance[]>(url, { params, headers });
  }

  save(entity: Attendance): Observable<Attendance> {
    let params = new HttpParams();
    let url = '';
    const headers = new HttpHeaders().set('content-type', 'application/json');
    if (entity.id) {
      url = `http://www.angular.at/api/flight/${entity.id.toString()}`;
      params = new HttpParams().set('ID', entity.id.toString());
      return this.http.put<Attendance>(url, entity, { headers, params });
    } else {
      url = `http://www.angular.at/api/flight`;
      return this.http.post<Attendance>(url, entity, { headers, params });
    }
  }

  delete(entity: Attendance): Observable<Attendance> {
    let params = new HttpParams();
    let url = '';
    const headers = new HttpHeaders().set('content-type', 'application/json');
    if (entity.id) {
      url = `http://www.angular.at/api/flight/${entity.id.toString()}`;
      params = new HttpParams().set('ID', entity.id.toString());
      return this.http.delete<Attendance>(url, { headers, params });
    }
    return null;
  }
}
import { Attendance } from './attendance';
import { AttendanceFilter } from './attendance-filter';
import { Injectable } from '@angular/core';
import { Observable, throwError as observableThrowError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';

@Injectable()
export class AttendanceService {

  attendanceList: Attendance[];

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
    const url = `https://localhost:44348/api/attendance/getAttendances`;
    const headers = new HttpHeaders().set('Accept', 'application/json');

    const params = {
      'from': filter.from,
      'to': filter.to,
    };

    return this.http.get<Attendance[]>(url, { params, headers });
  }

  save(attendance: Attendance): Observable<Attendance> {
    let params = new HttpParams();
    let url = '';
    const headers = new HttpHeaders().set('content-type', 'application/json');
    if (attendance.attendanceId) {
      url = `https://localhost:44348/api/attendance/${attendance.attendanceId.toString()}`;
      params = new HttpParams().set('ID', attendance.attendanceId.toString());
      return this.http.put<Attendance>(url, attendance, { headers, params });
    } else {
      url = `https://localhost:44348/api/attendance/createAttendance`;
      return this.http.post<Attendance>(url, attendance, { headers, params });
    }
  }

  delete(attendance: Attendance): Observable<Attendance> {
    let params = new HttpParams();
    let url = '';
    const headers = new HttpHeaders().set('content-type', 'application/json');
    if (attendance.attendanceId) {
      url = `https://localhost:44348/api/Attendance/${attendance.attendanceId.toString()}`;
      params = new HttpParams().set('ID', attendance.attendanceId.toString());
      return this.http.delete<Attendance>(url, { headers, params });
    }
    return null;
  }
  private handleError(res: HttpErrorResponse | any) {
    console.error(res.error || res.body.error);
    return observableThrowError(res.error || 'Server error');
  }
}
import { Attendance } from './attendance';
import { AttendanceFilter } from './attendance-filter';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

const headers = new HttpHeaders().set('Accept', 'application/json');

@Injectable()
export class AttendanceService {

  attendanceList: Attendance[] = [];
  api = "https://localhost:44348/api/attendance/";

  constructor(private http: HttpClient) {
  }

  findById(attendanceId: string): Observable<Attendance> {
    const url = `${this.api}GetAttendance`;
    const params = { attendanceId: attendanceId };
    return this.http.get<Attendance>(url, { params, headers });
  }

  load(filter: AttendanceFilter): void {
    this.find(filter).subscribe(result => {
      this.attendanceList = result;
    },
      err => {
        console.error('Erro ao carregar', err);
      }
    );
  }

  find(filter: AttendanceFilter): Observable<Attendance[]> {

    const params = {
      'from': filter.from,
      'to': filter.to,
    };

    return this.http.get<Attendance[]>(`${this.api}GetAttendances`, { params, headers });
  }

  save(attendance: Attendance): Observable<Attendance> {
    if (attendance.attendanceId) {
      return this.http.put<Attendance>(`${this.api}UpdateAttendance`, attendance, { headers });
    } else {
      return this.http.post<Attendance>(`${this.api}CreateAttendance`, attendance, { headers });
    }
  }

  delete(attendance: Attendance): Observable<Attendance> {
    if (attendance.attendanceId) {
      const params = new HttpParams().set('attendanceId', attendance.attendanceId.toString());
      return this.http.delete<Attendance>(`${this.api}DeleteAttendance`, { headers, params });
    }
    return null;
  }
}
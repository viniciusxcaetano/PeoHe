import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { catchError, map, tap } from 'rxjs/operators';
import { ToastService } from '../core/toast.service';
import { Attendance } from '../core/model/Attendance';
import { Observable } from 'rxjs';

const apiAddress = 'https://localhost:44348/api';

@Injectable()
export class AttendanceService implements OnInit {
    constructor(private http: HttpClient, private toastService: ToastService) { }

    public attendance: Attendance;

    ngOnInit() {
        let attendance = new Attendance();
        attendance.amount = 34300;
        attendance.typeOfPayment = 1;
        attendance.installmentsAmount = 6;

        this.http.post<Attendance>(`${apiAddress}/Attendance/CreateAttendance`, attendance)
            .pipe(tap(() => this.toastService.openSnackBar(`Attendance ${attendance.attendanceId} added`, 'POST')));

    }
    getAttendances() {
        return this.http
            .get<Array<Attendance>>(`${apiAddress}/attendances`)
            .pipe(
                map(attendances => attendances),
                tap(() => this.toastService.openSnackBar('Attendances retrieved successfully!', 'GET')),
                catchError(this.handleError)
            );
    }

    private handleError(res: HttpErrorResponse) {
        console.error(res.error);
        return Observable.throw(res.error || 'Server error');
    }
}
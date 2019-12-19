import { Component, OnInit } from '@angular/core';
import { RepositoryService } from '../../shared/services/repository.service';
import { Attendance } from 'src/app/model/Attendance';

@Component({
  selector: 'app-fetch-data',
  templateUrl: './fetch-data.component.html'
})
export class FetchDataComponent implements OnInit {
  public attendance: Attendance;

  constructor(private webService: RepositoryService) { }

  ngOnInit() {

    // this.webService.getWithParams("Attendance/GetAttendance",
    //   { params: { attendanceId: 'ec86dc13-e30d-4acf-a01a-25c28ddbd46a' } })
    //   .subscribe(response => {
    //     this.attendance = response as Attendance;
    //   }, error => console.error(error));

    let attendance = new Attendance();
    attendance.amount = 34300;
    attendance.typeOfPayment = 1;
    attendance.installmentsAmount = 6;

    this.webService.create("Attendance/CreateAttendance", attendance)
      .subscribe(response => {
        this.attendance = response as Attendance;
      }, error => console.error(error));

  }
}

interface WeatherForecast {
  date: string;
  temperatureC: number;
  temperatureF: number;
  summary: string;
}
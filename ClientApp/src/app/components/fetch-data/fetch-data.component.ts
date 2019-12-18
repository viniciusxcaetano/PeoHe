import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RepositoryService } from '../../shared/services/repository.service';

@Component({
  selector: 'app-fetch-data',
  templateUrl: './fetch-data.component.html'
})
export class FetchDataComponent implements OnInit {
  public forecasts: WeatherForecast[];

  constructor(private webService: RepositoryService) { }

  ngOnInit() {
    this.webService.getData("WeatherForecast/GetTeste").subscribe(result => {
      this.forecasts = result as WeatherForecast[];
    }, error => console.error(error));
  }
}

interface WeatherForecast {
  date: string;
  temperatureC: number;
  temperatureF: number;
  summary: string;
}
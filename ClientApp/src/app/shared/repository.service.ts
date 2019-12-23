import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RepositoryService {

  apiAddress: string = 'https://localhost:44348/api';

  constructor(private http: HttpClient) { }

  public get(route: string) {
    return this.http.get(this.createCompleteRoute(route));
  }

  public getWithParams(route: string, params) {
    return this.http.get(this.createCompleteRoute(route), params);
  }

  public create(route: string, body) {
    return this.http.post(this.createCompleteRoute(route), body, this.genereteHeaders());
  }

  public createFiles(route: string, body) {
    return this.http.post(this.createCompleteRoute(route), body);
  }

  public update(route: string, body) {
    return this.http.put(this.createCompleteRoute(route), body, this.genereteHeaders());
  }

  public delete(route: string) {
    return this.http.delete(this.createCompleteRoute(route));
  }

  private createCompleteRoute(route: string) {
    return `${this.apiAddress}/${route}`;
  }

  private genereteHeaders() {
    return {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
  }
}
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private REST_API_SERVER = "http://localhost:8080/api";
  dialogData: any;
  constructor(private httpClient: HttpClient) { }

  public create = (route: string, body: any) => {
    return this.httpClient.post(this.createCompleteRoute
      (route, this.REST_API_SERVER), body, this.generateHeaders());
  }

  private createCompleteRoute = (route: String, envAddress: string) => {
    return `${envAddress}/${route}`;
  }
  private generateHeaders = () => {
    return {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    }
  }

}
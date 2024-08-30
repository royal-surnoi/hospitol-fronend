import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MasterService {
  
  production:true | undefined
  apiEndPoint: string = "http://internal-hospital-internal-lb-384567430.us-east-1.elb.amazonaws.com:80/api/HospitalAppointment/";
  constructor(private http: HttpClient) { }

  createNew(obj:any): Observable<any> {
    return this.http.post(this.apiEndPoint + "AddNewAppointment", obj)
  }

  getAppointments(): Observable<any>{
    return this.http.get<Observable<any>>(this.apiEndPoint + "getAppointments")
  }
  
}

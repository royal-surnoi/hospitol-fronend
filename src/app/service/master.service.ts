import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MasterService {
  
  production:true | undefined
  apiEndPoint: string = "http://ec2-54-166-161-235.compute-1.amazonaws.com:8080/api/HospitalAppointment/";
  constructor(private http: HttpClient) { }

  createNew(obj:any): Observable<any> {
    return this.http.post(this.apiEndPoint + "AddNewAppointment", obj)
  }

  getAppointments(): Observable<any>{
    return this.http.get<Observable<any>>(this.apiEndPoint + "getAppointments")
  }
  
}

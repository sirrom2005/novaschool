import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Service } from './service.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient, private service:Service) { }

  doLogin(username:string, password:string):any
  {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const body = {
      username: username,
      password: password
    };

    return this.http.post<any>(environment.API_DOMAIN + '/authentication/authenticate', body, {headers, responseType:"json"});
  }

  // getSchoolIdByUserId(id: number):any {
  //   return this.http.get<any>(`${environment.API_DOMAIN}/schools/schoolidbyuserid/${id}`); 
  // }

  // //Save and Update Student Records
  // postStudentAccount(account:any):any{ return this.http.post(`${environment.API_DOMAIN}/students/`, account); }

  // //getStudentAccount(id:number):any{ return this.http.get<IAccount>(`${environment.API_DOMAIN}/students/${id}`); }

  // //getExaminationList():any{ return this.http.get<any>(`${environment.API_DOMAIN}/examination/list/${this.service.getUserId()}`); }

  // deleteExamination(id:number):any{ return this.http.delete<any>(`${environment.API_DOMAIN}/examination/${id}`); }

  // getTeacherAccount(id:number):any{ return this.http.get<any>(`${environment.API_DOMAIN}/accounts/${id}`); }

  // getClassList(id:number):any{ return this.http.get<any>(`${environment.API_DOMAIN}/classlist/${id}`); }

  // getCountryStateList(id:number):any{ return this.http.get<any>(`${environment.API_DOMAIN}/countrystate/${id}`); }

  getClassExamResultForStudent(student_id:number, class_id:number):any{ return this.http.get<any>(`${environment.API_DOMAIN}/examination/student/exam_result/${student_id}/${class_id}`); }
  getUpcomingExams(id:number):any{ return this.http.get<any>(`${environment.API_DOMAIN}/examination/student/upcoming_exams/${id}`); }
}

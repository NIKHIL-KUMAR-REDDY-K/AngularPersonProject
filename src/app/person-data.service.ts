import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders,HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PersonDataService {
  url="http://localhost:3000/Persons"

  constructor(private _httpClient : HttpClient) { 
   
    }
    getListOfPersons(){
      return this._httpClient.get("http://localhost:3000/Persons");
   }
   savePersonDetails(data:any){
    
    return this._httpClient.post(this.url,data);
   }
   deletePersonFromDb(id:any){
     return this._httpClient.delete(`${this.url}/${id}`);
   }
   GetDetailsToupdatePersonById(id:any){
    return this._httpClient.get(`${this.url}/${id}`);
   }
   UpdatePerson(id:any,data:any){
    return this._httpClient.put(`${this.url}/${id}`,data);

   }

}

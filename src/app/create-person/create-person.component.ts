import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import{PersonDataService} from '../person-data.service';
import {HttpClient,HttpHeaders,HttpParams} from '@angular/common/http';

@Component({
  selector: 'app-create-person',
  templateUrl: './create-person.component.html',
  styleUrls: ['./create-person.component.css']
})
export class CreatePersonComponent implements OnInit {

  constructor(private _httpClient : HttpClient) { }
  msg=false;
   List:any;
  ngOnInit(): void {
    
    
  }
  GetDetails(PersonDetailsFromForm:NgForm):void {
    //const newData={Name:PersonDetailsFromForm.value.Name,
                       // Email:PersonDetailsFromForm.value.Email,
                       //         DOB:PersonDetailsFromForm.value.DOB,
                        //        Avatar:PersonDetailsFromForm.value.Avatar,
                         //       Country:PersonDetailsFromForm.value.Country};
   // console.log(PersonDetailsFromForm.value.Name);
   // console.log(newData.Name);
   // this._service.AddThePersonIntoDB(newData);
   this._httpClient.post("http://localhost:3000/Persons",PersonDetailsFromForm);
  }

}

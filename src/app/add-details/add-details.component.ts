import { Component, OnInit } from '@angular/core';
import { NgForm,FormGroup,FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import {PersonDataService} from '../person-data.service';

@Component({
  selector: 'app-add-details',
  templateUrl: './add-details.component.html',
  styleUrls: ['./add-details.component.css']
})
export class AddDetailsComponent implements OnInit {

  addPerson=new FormGroup({
    Name: new FormControl(''),
    Email: new FormControl(''),
    DOB: new FormControl(''),
    Avatar: new FormControl(''),
    Country: new FormControl(''),
    Profile: new FormControl('')
  })

  constructor(private ser:PersonDataService) { }
 

  ngOnInit(): void {
  }
  collectDetails(){
   // console.warn(this.addPerson.value);
     return this.ser.savePersonDetails(this.addPerson.value).subscribe((result: any) => {
      console.warn("result is here", result);
    });
 
  }

  // GetDetailFromUser(PersonFormDetails:NgForm){
  //   console.log(PersonFormDetails.value.Name);
  //   console.log(PersonFormDetails.value.Email);
  //   console.log(PersonFormDetails);

  // }

}

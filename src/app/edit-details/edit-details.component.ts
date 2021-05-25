import { Component, OnInit } from '@angular/core';
import { NgForm,FormGroup,FormControl } from '@angular/forms';
import {PersonDataService} from '../person-data.service';
import {ActivatedRoute} from '@angular/router'


@Component({
  selector: 'app-edit-details',
  templateUrl: './edit-details.component.html',
  styleUrls: ['./edit-details.component.css']
})
export class EditDetailsComponent implements OnInit {
  
  editPerson=new FormGroup({
    Name: new FormControl(''),
    Email: new FormControl(''),
    DOB: new FormControl(''),
    Avatar: new FormControl(''),
    Country: new FormControl(''),
    Profile:new FormControl('')
  })


  constructor(private _router:ActivatedRoute,private _service:PersonDataService) {
    
   }
   
   public Photo:string="";

  ngOnInit(): void {
    //console.warn(this._router.snapshot.params.id);
    this._service.GetDetailsToupdatePersonById(this._router.snapshot.params.id).subscribe((result:any)=>{
      this.editPerson=new FormGroup({
        Name: new FormControl(result['Name']),
        Email: new FormControl(result['Email']),
        DOB: new FormControl(result['DOB']),
        Avatar: new FormControl(result['Avatar']),
        Country: new FormControl(result['Country']),
        Profile:new FormControl(result['Profile'])
        
        
      })
        this.Photo=this.editPerson.value.Profile;
      // console.log("this in constructor "+this.img123);
      // console.log(this.editPerson.value.Profile);
    })
  }


  

  

  valuesForEditField(){
    //console.warn(this.editPerson.value);
    this._service.UpdatePerson(this._router.snapshot.params.id,this.editPerson.value).subscribe(data=>{
      console.warn(data);
    })
  }

}

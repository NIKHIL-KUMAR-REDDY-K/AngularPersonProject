import { Component, OnInit } from '@angular/core';
import { PersonDataService} from '../person-data.service';

@Component({
  selector: 'app-display-details',
  templateUrl: './display-details.component.html',
  styleUrls: ['./display-details.component.css']
})
export class DisplayDetailsComponent implements OnInit {

  public PersonList:any;
  constructor(private _personDataService:PersonDataService) { }
   

  ngOnInit(){
    this.PersonList=this._personDataService.getListOfPersons().subscribe(data=>{this.PersonList=data;});

  }
  deletePerson(id:any){
    this.PersonList.splice(id-1,1)
    this._personDataService.deletePersonFromDb(id).subscribe((data)=>{
      console.warn("deleted successfully :",data);
    })

  }

}

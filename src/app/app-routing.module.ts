import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddDetailsComponent } from './add-details/add-details.component';
import { EditDetailsComponent } from './edit-details/edit-details.component';
import { DisplayDetailsComponent } from './display-details/display-details.component';
import { CreatePersonComponent } from './create-person/create-person.component';

const routes: Routes = [
  {path:'create',component:AddDetailsComponent},
  {path:'display',component:DisplayDetailsComponent},
  {path:'edit',component:EditDetailsComponent},
  {path:'edit/:id',component:EditDetailsComponent},
  {path:'CreatePerson',component:CreatePersonComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentComponent } from './pages/student/student.component';
import { HomeComponent } from './pages/home/home.component';
import { ListComponent } from './pages/list/list.component';
import { SearchComponent } from './pages/search/search.component';
import { AddComponent } from './pages/add/add.component';
import { StudentsRoutingModule } from './students-routing.module';



@NgModule({
  declarations: [
    StudentComponent,
    HomeComponent,
    ListComponent,
    SearchComponent,
    AddComponent,
  ],
  exports:[
  ],
  imports: [
    CommonModule,
    StudentsRoutingModule
  ]
})
export class StudentsModule { }

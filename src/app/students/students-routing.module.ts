import { NgModule } from '@angular/core';
import { Routes ,RouterModule  } from '@angular/router';
import { AddComponent } from './pages/add/add.component';
import { HomeComponent } from './pages/home/home.component';
import { ListComponent } from './pages/list/list.component';
import { SearchComponent } from './pages/search/search.component';
import { StudentComponent } from './pages/student/student.component';

const routes:Routes=[
  {
    path:'add',
    component: AddComponent
  },
  {
    path:'home',
    component: HomeComponent
  },
  {
    path:'list',
    component: ListComponent
  },
  {
    path:'search',
    component: SearchComponent
  },
  {
    path:'Student',
    component: StudentComponent
  },
  {
    path:'**',
    redirectTo: 'home'
  },
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class StudentsRoutingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes ,RouterModule  } from '@angular/router';
import { ErrorPageComponent } from './shared/error-page/error-page.component';

const routes:Routes  = [
  {
    path:'auth',
    loadChildren: ()=> import('./auth/auth.module').then(m=>m.AuthModule)
  },
  {
    path:'students',
    loadChildren: ()=> import('./students/students.module').then(m=>m.StudentsModule)
  },
  {
    path:'404',
    component: ErrorPageComponent,

  },
  {
    path:'**',
    //component: ErrorPageComponent,
    redirectTo: '404'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { 

}

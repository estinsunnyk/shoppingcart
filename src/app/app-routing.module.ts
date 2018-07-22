import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
//
import { HomeComponent } from './comp/home/home.component';


const appRoutes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent },
  //{ path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {
       // enableTracing: true, // <-- debugging purposes only
      }
    )
  ],
  exports: [
    RouterModule
  ],
})
export class AppRoutingModule { }

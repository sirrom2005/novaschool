import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './dashboard/home/home.component';
import { SecurityGuard } from './services/security.guard';
import { TimeTableComponent } from './dashboard/time-table/time-table.component';
import { OnlineClassComponent } from './dashboard/online-class/online-class.component';
import { VideosComponent } from './dashboard/videos/videos.component';
import { ExamsComponent } from './dashboard/exams/exams.component';
import { ExamsResultsComponent } from './dashboard/exams-results/exams-results.component';
import { Error404Component } from './error404/error404.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'login/:action', component: LoginComponent},
  { path: '', component: DashboardComponent, 
    children:[
      { path: '',             component: HomeComponent,         canActivate: [SecurityGuard]},
      { path: 'online-class', component: OnlineClassComponent,  canActivate: [SecurityGuard]},
      { path: 'videos',       component: VideosComponent,       canActivate: [SecurityGuard]},
      { path: 'time-table',   component: TimeTableComponent,    canActivate: [SecurityGuard]},
      { path: 'exams',        component: ExamsComponent,        canActivate: [SecurityGuard]},
      { path: 'exam-results',component: ExamsResultsComponent, canActivate: [SecurityGuard]}
    ]
  },
  {path: '404', component: Error404Component},
  {path: '**', redirectTo: '/404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 
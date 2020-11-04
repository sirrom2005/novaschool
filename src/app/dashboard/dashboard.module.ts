import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { HomeComponent } from './home/home.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TimeTableComponent } from './time-table/time-table.component';
import { ExamsComponent } from './exams/exams.component';
import { ExamsResultsComponent } from './exams-results/exams-results.component';
import { VideosComponent } from './videos/videos.component';
import { OnlineClassComponent } from './online-class/online-class.component';


@NgModule({
  declarations: [
    DashboardComponent, 
    HomeComponent, 
    TimeTableComponent, ExamsComponent, ExamsResultsComponent, VideosComponent, OnlineClassComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule 
  ]
})
export class DashboardModule { } 

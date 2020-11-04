import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {ApiService} from '../../services/api.service';
import {Service} from '../../services/service.service';

@Component({
  selector: 'app-exams',
  templateUrl: './exams.component.html',
  styleUrls: ['./exams.component.css']
})
export class ExamsComponent implements OnInit {
  exams:Array<any> = [];

  constructor(private api:ApiService, private service:Service, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.api.getUpcomingExams(this.service.getUserId())
      .subscribe(
        data => { this.exams = data}
      );
  }

}

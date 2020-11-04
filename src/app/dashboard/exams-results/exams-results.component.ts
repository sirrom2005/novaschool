import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { Service } from 'src/app/services/service.service';

@Component({
  selector: 'app-exams-results',
  templateUrl: './exams-results.component.html',
  styleUrls: ['./exams-results.component.css']
})
export class ExamsResultsComponent implements OnInit {
  examsResults:Array<any> = [];

  constructor(private api:ApiService, private service:Service, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.api.getClassExamResultForStudent(this.service.getUserId(), 42)
      .subscribe( 
        data => { this.examsResults = data}
      );
  }

}

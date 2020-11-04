import { Component, OnInit } from '@angular/core';
import { Service } from '../services/service.service';

declare var jQuery: any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit
{
  username:string;
  footerText:string;
  version:string;
 
  constructor(private service:Service) { }

  ngOnInit(): void {
    this.username = this.service.getUserName(); 
    this.footerText = this.service.getFooterText(); 
    this.version = this.service.getVersion(); 
  }

  logout(){
    jQuery("#logoutModal").modal('hide');
    this.service.doLogout();
  }
}

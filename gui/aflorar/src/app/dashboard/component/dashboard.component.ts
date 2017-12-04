import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  currentPage: string;

  constructor() { }

  ngOnInit() {
  }

  pageClick(event: HTMLElement){
    this.currentPage = event.id;
  }

  getCurrentPage(): string{
    return this.currentPage;
  }

}

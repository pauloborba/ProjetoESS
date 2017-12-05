import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  loggedIn(){
    return localStorage.getItem("logado") == "true";
  }

  logOut(){
    localStorage.setItem("clienteLogado", "");
    localStorage.setItem("logado", "false");
  }

}

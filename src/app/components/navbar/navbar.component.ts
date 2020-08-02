import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';  
import { User } from '../../models/User';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  user: User;
  menuShow: boolean = false;

  constructor() { }

  ngOnInit(): void {

    this.user = {
      firstName: 'Tyler',
      lastName: 'Durken',
      companyName: 'TD Photography'
    }
  }

  toggleMenu() {
    this.menuShow = !this.menuShow;
  }

  turnMenuOff() {
    this.menuShow = false;
  }

}

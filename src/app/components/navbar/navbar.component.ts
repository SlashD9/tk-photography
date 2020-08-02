import { Component, OnInit } from '@angular/core';
import { User } from '../../models/User';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  user: User;

  constructor() { }

  ngOnInit(): void {
    this.user = {
      firstName: 'Tyler',
      lastName: 'Durken',
      companyName: 'TD Photography'
    }
  }

}

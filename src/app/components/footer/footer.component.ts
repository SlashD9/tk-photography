import { Component, OnInit } from '@angular/core';
import { User } from '../../models/User';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  user: User;
  constructor() { }

  ngOnInit(): void {
    this.user = {
      firstName: 'Tyler',
      lastName: 'Kavanagh',
      companyName: 'TK Photography'
    }
  }

}

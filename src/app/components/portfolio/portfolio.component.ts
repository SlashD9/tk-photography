import { Component, OnInit } from '@angular/core';
import { User } from '../../models/User';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  users: User;

  constructor() { }
 
  ngOnInit(): void {
    this.users = {
      firstName: 'Tom',
      lastName: 'Kearney',
      companyName: 'TK Photography',
      image: {
        image1: 'https://lorempixel.com/600/400/nature/1',
        image2: 'https://lorempixel.com/600/400/nature/2',
        image3: 'https://lorempixel.com/600/400/nature/3',
        image4: 'https://lorempixel.com/600/400/nature/4',
        image5: 'https://lorempixel.com/600/400/nature/5',
        image6: 'https://lorempixel.com/600/400/nature/6'
      }
    }
  }

}

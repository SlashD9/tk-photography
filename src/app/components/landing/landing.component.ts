import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  constructor() { }
  mainImage: string = '';
    ngOnInit() {
      this.mainImage = 'http://lorempixel.com/1900/1200/nature/1';
  }

}

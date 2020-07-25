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
      this.mainImage = 'https://scontent-dub4-1.xx.fbcdn.net/v/t1.0-9/105309961_4291121420928248_7430257701798282182_o.jpg?_nc_cat=104&_nc_sid=dd7718&_nc_ohc=cFysYnPN89sAX_IIxbZ&_nc_ht=scontent-dub4-1.xx&oh=32db54ef17b9a2392a3cec800762c8d3&oe=5F40A164';
  }

}

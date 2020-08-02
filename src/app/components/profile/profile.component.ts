import { Component, OnInit } from '@angular/core';
import { User } from '../../models/User';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: User;

  constructor() {
    
    this.user = {
      firstName: 'Tyler',
      lastName:  'Durken',
      companyName: 'TD Photography',
      email: 'tkphoto@gmail.com',
      phoneNumber: 5555555,
      title: 'Photographer',
      about: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore iusto sunt assumenda fuga placeat eius, voluptatibus consectetur magnam minima in tempora fugit accusantium eaque? Ad tempore ab quas eum est! Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, iste obcaecati, doloremque repellat eaque molestiae dolorum voluptatibus minima debitis quae quod rem necessitatibus a sit, laborum unde quo? Ea, culpa? Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus dicta repellat atque esse quisquam nostrum. Repudiandae quia accusantium unde iure. Ea tenetur corporis consectetur recusandae, porro est quis aliquam voluptas. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta distinctio, rerum quam laudantium accusamus minus consequatur saepe quaerat. Velit culpa sequi voluptas! Ipsam blanditiis facilis molestiae soluta sequi nisi iste. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis ipsam doloribus eius quisquam similique, esse sit eum, itaque repellendus quae exercitationem reiciendis asperiores ipsum maiores alias neque atque! Nulla, eos? Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi sapiente, libero officia accusamus alias consequuntur, odio eaque aliquid, iusto deleniti laudantium ullam harum. Voluptates eveniet pariatur veritatis molestias, voluptate error?',
      image: {
        profileImage: 'http://lorempixel.com/output/people-h-c-507-522-7.jpg',
      }
    }
  }


  ngOnInit(){}
  

}

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
      firstName: 'Tom',
      lastName:  'Kearney',
      email: 'tkphoto@gmail.com',
      phoneNumber: 5555555,
      title: 'Photographer',
      about: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore iusto sunt assumenda fuga placeat eius, voluptatibus consectetur magnam minima in tempora fugit accusantium eaque? Ad tempore ab quas eum est! Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, iste obcaecati, doloremque repellat eaque molestiae dolorum voluptatibus minima debitis quae quod rem necessitatibus a sit, laborum unde quo? Ea, culpa? Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus dicta repellat atque esse quisquam nostrum. Repudiandae quia accusantium unde iure. Ea tenetur corporis consectetur recusandae, porro est quis aliquam voluptas. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta distinctio, rerum quam laudantium accusamus minus consequatur saepe quaerat. Velit culpa sequi voluptas! Ipsam blanditiis facilis molestiae soluta sequi nisi iste. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis ipsam doloribus eius quisquam similique, esse sit eum, itaque repellendus quae exercitationem reiciendis asperiores ipsum maiores alias neque atque! Nulla, eos? Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi sapiente, libero officia accusamus alias consequuntur, odio eaque aliquid, iusto deleniti laudantium ullam harum. Voluptates eveniet pariatur veritatis molestias, voluptate error?',
      image: {
        profileImage: 'https://scontent-dub4-1.xx.fbcdn.net/v/t1.0-9/46819164_2548740485166359_6176613402048200704_n.jpg?_nc_cat=104&_nc_sid=85a577&_nc_ohc=EGoIlT8E7-IAX_MjaK-&_nc_ht=scontent-dub4-1.xx&oh=e1223e981be472dfcf0dbd0f186ec532&oe=5F440D7B',
      }
    }
  }


  ngOnInit(){}
  

}

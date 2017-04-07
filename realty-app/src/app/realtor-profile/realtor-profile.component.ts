import { Component } from '@angular/core';

@Component({
  selector: 'realtor-profile',
  templateUrl: './realtor-profile.component.html',
  styleUrls: ['./realtor-profile.css']
})
export class RealtorProfileComponent {
  name = "Blake Baker";
  address = "1111 Fairmont Pkwy"
  city = "Pasadena"
  state = "texas"
}

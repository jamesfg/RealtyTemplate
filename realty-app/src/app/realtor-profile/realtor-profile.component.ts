import { Component } from '@angular/core';

@Component({
  selector: 'realtor-profile',
  templateUrl: './realtor-profile.component.html',
  styleUrls: ['./realtor-profile.css']
})
export class RealtorProfileComponent {
  name: string =  'Blake Baker';

  constructor() { }

  ngOnInit() {
  }
}

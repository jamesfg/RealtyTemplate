import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-coming-soon',
  templateUrl: './coming-soon.component.html',
  styleUrls: ['./coming-soon.component.css']
})
export class ComingSoonComponent implements OnInit {
  searchTerm: string = "";

  constructor() { }

  ngOnInit() {

  }

  onSearch() {
    window.open('http://www.har.com/search/dosearch?for_sale=1&quicksearch=' + encodeURI(this.searchTerm));
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pop-over-filter',
  templateUrl: './pop-over-filter.component.html',
  styleUrls: ['./pop-over-filter.component.scss'],
})
export class PopOverFilterComponent implements OnInit {
  filterBy : any;
  sortBy : any;


  constructor() { }

  ngOnInit() {}

}

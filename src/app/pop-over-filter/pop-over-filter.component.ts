import { Component, OnInit } from '@angular/core';
import { LikedQuery, LikedService } from 'src/app/stores/liked';

@Component({
  selector: 'app-pop-over-filter',
  templateUrl: './pop-over-filter.component.html',
  styleUrls: ['./pop-over-filter.component.scss'],
})
export class PopOverFilterComponent implements OnInit {
  filterBy : any;
  filteredList : any;
  likedList : any;
  
  constructor(
    private likedService: LikedService,
    public likedQuery: LikedQuery,) { }

  ngOnInit() {}


  filter(event) {
    console.log(this.filterBy)
    this.filterBy = event.detail.value;
    this.likedList = this.likedQuery.getAll();
    const found = this.likedList.filter((profile) =>
      profile?.subcategory.includes(this.filterBy)
    );
    this.filteredList = found;
    console.log(this.likedList)
    console.log(this.filteredList)
  }


}

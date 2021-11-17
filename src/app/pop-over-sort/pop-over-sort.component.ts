import { Component, OnInit } from '@angular/core';
import { title } from 'process';
import { LikedQuery, LikedService } from 'src/app/stores/liked';

@Component({
  selector: 'app-pop-over-sort',
  templateUrl: './pop-over-sort.component.html',
  styleUrls: ['./pop-over-sort.component.scss'],
})
export class PopOverSortComponent implements OnInit {
  sortBy : any;
  likedList: any;
  sortedList: any;
  sortList: any;

  constructor(
    private likedService: LikedService,
    public likedQuery: LikedQuery,
  ) { }

  ngOnInit() {}
  

  sortByAlpha(event) {
    console.log(event.detail.value)
    this.likedList = this.likedQuery.getAll();
    if (event.detail.value.trim() == "Distance"){
      this.sortList = this.likedList.sort((a, b) => (a.distanceKm > b.distanceKm) ? 1 : -1)
    }
    else{
      this.sortList = this.likedList.sort((a, b) => (a.title > b.title) ? 1 : -1)
    }
    this.sortedList = this.sortList;
    console.log(this.sortList)
  }

  ionViewWillEnter() {
    this.likedService.getList();
  }

}

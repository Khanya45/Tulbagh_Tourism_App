import { Component, OnInit } from '@angular/core';
import { NavController, PopoverController } from '@ionic/angular';
import { PopOverFilterComponent } from 'src/app/pop-over-filter/pop-over-filter.component';
import { PopOverSortComponent } from 'src/app/pop-over-sort/pop-over-sort.component';
import { LikedQuery, LikedService } from 'src/app/stores/liked';

@Component({
  selector: 'app-liked',
  templateUrl: './liked.page.html',
  styleUrls: ['./liked.page.scss'],
})
export class LikedPage implements OnInit {
  filterBy : any;
  sortBy : any;

  constructor(
    private likedService: LikedService,
    public likedQuery: LikedQuery,
    private navCtrl: NavController,
    private popOverController: PopoverController,
    // public popOverSortComponent: PopOverSortComponent,
  ) {}

  ngOnInit() {}

  ionViewWillEnter() {
    this.likedService.getList();
  }

  goTo(profile) {
    this.navCtrl.navigateForward('business-info', {
      state: { profile },
    });
  }

  async popFilter(event){
    const popover = await this.popOverController.create({
      component: PopOverFilterComponent, event
    })
    return await popover.present();
  }

  async popSort(event){
    const popOver = await this.popOverController.create({
      component: PopOverSortComponent, event
    })
    return await popOver.present();
  }
}

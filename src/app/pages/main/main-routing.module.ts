import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventsPage } from '../events/events.page';

import { MainPage } from './main.page';

const routes: Routes = [
  {
    path: '',
    component: MainPage
  },
  {
    path: 'events',
    component: EventsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainPageRoutingModule {}

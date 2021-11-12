import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SosGridPage } from './sos-grid.page';

const routes: Routes = [
  {
    path: '',
    component: SosGridPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SosGridPageRoutingModule {}

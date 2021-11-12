import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SosGridPageRoutingModule } from './sos-grid-routing.module';

import { SosGridPage } from './sos-grid.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SosGridPageRoutingModule
  ],
  declarations: [SosGridPage]
})
export class SosGridPageModule {}

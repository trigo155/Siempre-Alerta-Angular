import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BandPageRoutingModule } from './band-page-routing.module';
import { BandViewComponent } from './components/band-view/band-view.component';
import { RequestService } from 'src/app/service/request.service';


@NgModule({
  declarations: [
    BandViewComponent
  ],
  imports: [
    CommonModule,
    BandPageRoutingModule
  ],
  providers: [RequestService]
})
export class BandPageModule { }

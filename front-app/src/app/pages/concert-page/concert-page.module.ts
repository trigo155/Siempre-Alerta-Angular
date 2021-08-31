import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConcertPageRoutingModule } from './concert-page-routing.module';
import { ConcertViewComponent } from './components/concert-view/concert-view.component';
import { RequestService } from 'src/app/service/request.service';


@NgModule({
  declarations: [
    ConcertViewComponent
  ],
  imports: [
    CommonModule,
    ConcertPageRoutingModule
  ],
  providers: [RequestService]
})
export class ConcertPageModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DiscogPageRoutingModule } from './discog-page-routing.module';
import { DiscogViewComponent } from './components/discog-view/discog-view.component';
import { RequestService } from 'src/app/service/request.service';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    DiscogViewComponent
  ],
  imports: [
    CommonModule,
    DiscogPageRoutingModule,
    SharedModule
  ],
  providers: [RequestService]
})
export class DiscogPageModule { }

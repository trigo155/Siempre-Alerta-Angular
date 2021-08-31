import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BandViewComponent } from './components/band-view/band-view.component';

const routes: Routes = [
  { path: '', component: BandViewComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BandPageRoutingModule { }

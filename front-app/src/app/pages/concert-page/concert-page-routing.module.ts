import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConcertViewComponent } from './components/concert-view/concert-view.component';

const routes: Routes = [
  { path: '', component: ConcertViewComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConcertPageRoutingModule { }

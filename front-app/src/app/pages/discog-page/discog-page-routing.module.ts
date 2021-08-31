import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DiscogViewComponent } from './components/discog-view/discog-view.component';

const routes: Routes = [
  { path: '', component: DiscogViewComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DiscogPageRoutingModule { }

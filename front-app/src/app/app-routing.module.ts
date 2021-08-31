import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', redirectTo: 'home', pathMatch: 'full'
  },
  {
    path: 'banda',
    loadChildren: () => import('./pages/band-page/band-page.module').then(module => module.BandPageModule)
  },
  {
    path: 'discografia',
    loadChildren: () => import('./pages/discog-page/discog-page.module').then(module => module.DiscogPageModule)
  },
  {
    path: 'conciertos',
    loadChildren: () => import('./pages/concert-page/concert-page.module').then(module => module.ConcertPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

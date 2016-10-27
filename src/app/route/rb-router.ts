import { RouterModule, Routes } from '@angular/router';

import { LeageItemComponent } from '../components/leage-item/leage-item.component';


const routes: Routes = [
  { path: '', redirectTo: 'leage', pathMatch: 'full'},
  { path: 'leage', component: LeageItemComponent},
  { path: 'leage/:id', component: LeageItemComponent}
];

export const routing = RouterModule.forRoot(routes);

import { RouterModule, Routes } from '@angular/router';

import { LeageItemComponent } from '../components/leage-item/leage-item.component';
import { LeaguetableComponent } from '../components/leage-item/leaguetable.component';
import { LeagueplayersComponent } from '../components/leage-item/leagueplayers.component';


const routes: Routes = [
  { path: '', redirectTo: 'leage', pathMatch: 'full'},
  { path: 'leage', component: LeageItemComponent},
  { path: 'leage/:id', component: LeageItemComponent,
    children: [
      { path: '', redirectTo: 'leagueTeams', pathMatch: 'full' },
      { path: 'leagueTeams', component: LeaguetableComponent },
      { path: 'players', component: LeagueplayersComponent }
    ]}
];

export const routing = RouterModule.forRoot(routes);

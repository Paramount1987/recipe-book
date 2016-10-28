import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { LeageItemModule } from './modules/leage-item/leage-item.module';

import { routing }  from './route/rb-router';
import { HeaderComponent } from './header/header.component';
import { FootballService } from './service/football.service';
import { LeagesListComponent } from './components/leages-list/leages-list.component';
import { LeageItemComponent } from './components/leage-item/leage-item.component';
import { LeaguetableComponent } from './components/leage-item/leaguetable.component';
import { LeagueplayersComponent } from './components/leage-item/leagueplayers.component';
import { PlayerPricePipe } from './pipes/player-price.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LeagesListComponent,
    LeageItemComponent,
    LeaguetableComponent,
    LeagueplayersComponent,
    PlayerPricePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    LeageItemModule
  ],
  providers: [FootballService],
  bootstrap: [AppComponent]
})
export class AppModule { }

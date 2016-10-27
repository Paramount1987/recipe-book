import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { routing }  from './route/rb-router';
import { HeaderComponent } from './header/header.component';
import { FootballService } from './service/football.service';
import { LeagesListComponent } from './components/leages-list/leages-list.component';
import { LeageItemComponent } from './components/leage-item/leage-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LeagesListComponent,
    LeageItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [FootballService],
  bootstrap: [AppComponent]
})
export class AppModule { }

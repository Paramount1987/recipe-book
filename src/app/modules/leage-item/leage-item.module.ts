import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';

import { LeagueItemComponent } from './league-item.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [LeagueItemComponent],
  exports: [LeagueItemComponent]
})
export class LeageItemModule {

  static forRoot(): ModuleWithProviders{
    return {
      ngModule: LeageItemModule,
      providers: []
    }
  }
}

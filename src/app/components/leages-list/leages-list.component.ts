import { Component, OnInit } from '@angular/core';

import { FootballService } from '../../service/football.service';
import { LEAGES } from '../../data/leages.data';

@Component({
  selector: 'rb-leages-list',
  templateUrl: './leages-list.component.html',
  styleUrls: ['./leages-list.component.css']
})
export class LeagesListComponent implements OnInit {
  private leages: any;

  constructor(private footballService: FootballService) { }

  ngOnInit() {
    if(LEAGES.length){
      this.leages = LEAGES;
    }else{
      this.footballService.getLeages()
        .subscribe((data) => {
          Array.prototype.push.apply(LEAGES, data);
          this.leages = LEAGES;
        });
    }
  }

  onClickLeage(id:number) {

  }

}

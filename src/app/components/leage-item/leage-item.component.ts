import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { FootballService } from '../../service/football.service';

@Component({
  selector: 'rb-leage-item',
  templateUrl: './leage-item.component.html',
  styleUrls: ['./leage-item.component.css']
})
export class LeageItemComponent implements OnInit, OnDestroy {
  private id: number;
  private sub: any;
  private anyErrors: Error;

  public league: any;

  constructor(private route: ActivatedRoute, private footballService: FootballService) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      if(!params['id']) return;

      this.id = +params['id'];
      this.footballService.getLeageItem(this.id)
        .subscribe((data) => {
          this.anyErrors = null;
          this.league = data;
        }, error => {
          this.league = null;
          this.anyErrors = error.json();
        }
      );
    });

  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}

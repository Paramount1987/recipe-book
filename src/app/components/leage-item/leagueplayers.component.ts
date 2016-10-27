import { Component, OnInit, OnDestroy } from '@angular/core';

import { ActivatedRoute} from '@angular/router';

import { FootballService } from '../../service/football.service';

@Component({
  selector: 'rb-leagueplayers',
  templateUrl: './leagueplayers.component.html',
  styleUrls: ['./leagueplayers.component.css']
})
export class LeagueplayersComponent implements OnInit, OnDestroy {

  private id: number;
  private sub: any;
  private anyErrors: Error;

  public players: any;

  constructor(private route: ActivatedRoute,
              private footballService: FootballService) { }

  ngOnInit() {

  }

  ngOnDestroy() {

  }

}

import { Component, OnInit, Input } from '@angular/core';

import { FootballService } from '../../service/football.service';

@Component({
  selector: 'rb-leagueplayers',
  templateUrl: './leagueplayers.component.html',
  styleUrls: ['./leagueplayers.component.css']
})
export class LeagueplayersComponent implements OnInit {
  @Input() players: any;
  @Input() team: any;

  constructor(private footballService: FootballService) { }

  ngOnInit() {

  }

}

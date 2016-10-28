import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute} from '@angular/router';

import { FootballService } from '../../service/football.service';

@Component({
  selector: 'rb-leaguetable',
  templateUrl: './leaguetable.component.html',
  styleUrls: ['./leaguetable.component.css']
})
export class LeaguetableComponent implements OnInit, OnDestroy {
  private id: number;
  private sub: any;
  private anyErrors: Error;

  public league: any;
  public players: any;
  public errorPlayers: Error;
  public team: any;

  constructor(private route: ActivatedRoute,
              private footballService: FootballService) { }

  ngOnInit() {
    this.sub = this.route.parent.params.subscribe(params => {
      if(!params['id']) return;
      this.id = +params['id'];

      this.footballService.getLeageItem(this.id)
        .subscribe((data) => {
          this.clearInfoTeam();
          this.anyErrors = null;
          this.league = data;
        }, error => {
          this.clearInfoTeam();
          this.league = null;
          this.anyErrors = error.json();
        }
      );
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  onGetPlayers(team:any) {
    this.team = team.teamName;
    this.footballService.getPlayersItem(team._links.team.href)
      .subscribe((data) => {
        this.players = data;
      }, error => {
        this.errorPlayers = error.json();
      });
  }

  clearInfoTeam(){
    this.team = null;
    this.players = null;
  }
}

import { Injectable } from '@angular/core';

import {Http, Headers, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable()
export class FootballService {
  private api: string = 'http://api.football-data.org/v1/competitions/';
  private apiPlayers: string = 'http://api.football-data.org/v1/teams/';
  private _header: Headers;
  private options: any;

  constructor(private _http: Http) {
    this._header = new Headers({'X-Auth-Token': 'b4df576d49f84213a7ac23208d7b5216'});
    this.options = new RequestOptions({ headers: this._header });
  }

  getLeages(): Observable<any> {
      return this._http.get( this.api, this.options ).map((response) => response.json());
  }

  getLeageItem(id:number): Observable<any> {
    return this._http.get( `${this.api}${id}/leagueTable`, this.options).map((response) => response.json());
  }

  getPlayersItem(api:string): Observable<any> {
    return this._http.get( api, this.options).map((response) => response.json());
  }

}

import { Component, OnInit } from '@angular/core';

import { NgForm, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'rb-league-item',
  templateUrl: './leage-item.component.html',
  styleUrls: ['./leage-item.component.css']
})
export class LeagueItemComponent implements OnInit {
  generatedUser: string = 'User';

  constructor() { }

  ngOnInit() {
  }

  registerUser(form: NgForm){
    console.log(form.value);
  }

}

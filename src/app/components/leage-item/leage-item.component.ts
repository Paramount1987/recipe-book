import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';


@Component({
  selector: 'rb-leage-item',
  templateUrl: './leage-item.component.html',
  styleUrls: ['./leage-item.component.css']
})
export class LeageItemComponent implements OnInit {
  private id: number;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => this.id = +params['id'])
  }

}

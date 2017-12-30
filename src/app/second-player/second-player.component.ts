import { Component, OnInit } from '@angular/core';
import { Route, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-second-player',
  templateUrl: './second-player.component.html',
  styleUrls: ['./second-player.component.scss']
})
export class SecondPlayerComponent implements OnInit {

  constructor(
    private route: ActivatedRoute
  ) { }
  firstUser: string;
  secondUser: string;
  ngOnInit() {

    this.route.queryParams.subscribe(
      (params: Params) => {
        // tslint:disable-next-line:curly
        if (params['user'])
          this.firstUser = params['user'];
      }
    );
  }

}

import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-win',
  templateUrl: './win.component.html',
  styleUrls: ['./win.component.scss']
})
export class WinComponent implements OnInit {

  constructor(
    private appService: AppService,
    private route: ActivatedRoute,
  ) { }
  data: any;
  ngOnInit() {
      this.route.queryParams.subscribe(
        (params: Params) => {
          // tslint:disable-next-line:curly
          if (params['user']) {
            this.appService.getUser(params['user']).subscribe(
              Response => {
               this.data = Response;
              });
          }
          });
    }
}

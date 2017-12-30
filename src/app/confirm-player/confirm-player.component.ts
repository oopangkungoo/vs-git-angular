import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { ActivatedRoute, Params, Router, NavigationExtras } from '@angular/router';


@Component({
  selector: 'app-confirm-player',
  templateUrl: './confirm-player.component.html',
  styleUrls: ['./confirm-player.component.scss']
})
export class ConfirmPlayerComponent implements OnInit {

  constructor(
    // tslint:disable-next-line:no-shadowed-variable
    private AppService: AppService,
    private route: ActivatedRoute,
    private router: Router
  ) { }
  firstUserData: any;
  SecondUserData: any;
  firstUser: string;
  secondUser: string;
  ngOnInit() {
    this.route.queryParams.subscribe(
      (params: Params) => {
        // tslint:disable-next-line:curly
        if (params['firstUser']) {
          this.firstUser = params['firstUser'];
          this.AppService.getUser(this.firstUser).subscribe(
            Response => {
              this.firstUserData = Response;
            }
        );
        }
        if (params['secondUser']) {
          this.secondUser = params['secondUser'];
          this.AppService.getUser(this.secondUser).subscribe(
            Response => {
              this.SecondUserData = Response;
              console.log(this.SecondUserData);
            }
        );
        }
      }
    );

  }

  battle()  {
    let win: any;
    if (this.firstUserData.followers > this.SecondUserData.followers) {
        win = this.firstUser;
    }
    // tslint:disable-next-line:one-line
    else {
        win = this.secondUser;
    }

    let navigationExtras: NavigationExtras = {
      queryParams: {
      'user' : win
    }
  };
    this.router.navigate(['/win'], navigationExtras);
  }
}

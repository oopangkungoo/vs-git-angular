import {UserModel} from '../model/user-mode';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-player',
  templateUrl: './first-player.component.html',
  styleUrls: ['./first-player.component.scss']
})
export class FirstPlayerComponent implements OnInit {

  constructor() { }
  UserModel = new UserModel();
  username: string;
  ngOnInit() {
  }

}

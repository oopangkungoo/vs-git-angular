import {UserModel} from '../../model/user-mode';
import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import {Month } from '../../month.enum';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  constructor() { }
  @Input() text: string;
  @Input() Model: UserModel;
  // tslint:disable-next-line:no-inferrable-types
  label: string = 'Helloworld';
  Month = Month;
  // tslint:disable-next-line:use-life-cycle-interface
  ngOnChanges(changes: SimpleChanges) {
    // Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    // Add '${implements OnChanges}' to the class.
    this.label = changes['text'].currentValue;
  }
  ngOnInit() {
    const date: Date = new Date();
    if (date.getMonth() === Month.january) {
      console.log('true');
    } else {
      console.log('false');
    }

  }

}

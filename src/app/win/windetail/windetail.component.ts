import { Component, OnInit, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-windetail',
  templateUrl: './windetail.component.html',
  styleUrls: ['./windetail.component.scss']
})
export class WindetailComponent implements OnInit {

  constructor() { }
  @Input() data: any;
  // tslint:disable-next-line:use-life-cycle-interface
  ngOnChanges(changes: SimpleChanges) {
    // Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    // Add '${implements OnChanges}' to the class.
    this.data = changes['data'].currentValue;
  }
  ngOnInit() {
  }

}

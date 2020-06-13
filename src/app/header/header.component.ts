import {Component, Input, OnChanges, OnInit} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnChanges {

  @Input() activePage;
  constructor() { }

  ngOnInit() {
    this.activePage = 0;
  }

  ngOnChanges() {
    console.log(this.activePage);
  }

}

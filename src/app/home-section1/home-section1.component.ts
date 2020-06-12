import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-section1',
  templateUrl: './home-section1.component.html',
  styleUrls: ['./home-section1.component.css']
})
export class HomeSection1Component implements OnInit {

  load_elements = {
    title: {
      delay: 2500,
      load: false
    },
    line: {
      delay: 0,
      load: false
    }
  };
  constructor() { }

  ngOnInit() {
    this.loadElements();
  }

  loadElements() {
    setTimeout(() => {this.load_elements.title.load = true; }, this.load_elements.title.delay);
    setTimeout(() => {this.load_elements.line.load = true; });
  }
}

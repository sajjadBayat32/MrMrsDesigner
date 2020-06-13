import { Component, OnInit } from '@angular/core';
import Swiper from 'swiper';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  p_swiper: Swiper;
  slide_num;

  constructor() { }

  ngOnInit() {
    this.p_swiper = new Swiper('.page-sections', {
      direction: 'vertical',
      slidesPerView: 1,
      spaceBetween: 0,
      touchRatio: 0,
      mousewheel: true,
    });
    this.slideListener();
  }

  slideListener() {
    const self = this;
    // @ts-ignore
    this.p_swiper.on('slideChange', function(e) {
      self.slide_num = self.p_swiper.activeIndex;
    });
  }

}

import { Component, OnInit } from '@angular/core';
import Swiper from 'swiper';

@Component({
  selector: 'app-home-section4',
  templateUrl: './home-section4.component.html',
  styleUrls: ['./home-section4.component.css']
})
export class HomeSection4Component implements OnInit {

  constructor() { }

  ngOnInit() {
    const swiper = new Swiper('.whats-up-slides', {
      spaceBetween: 0,
      effect: 'fade',
      centeredSlides: true,
      loop: true,
      autoplay: {
        delay: 4000,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.whats-up-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }
    });
  }

}

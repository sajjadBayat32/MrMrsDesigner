import { Component, OnInit } from '@angular/core';
import Swiper from 'swiper';

@Component({
  selector: 'app-home-section5',
  templateUrl: './home-section5.component.html',
  styleUrls: ['./home-section5.component.css']
})
export class HomeSection5Component implements OnInit {

  constructor() { }

  ngOnInit() {
    this.createSlider();
  }

  createSlider() {
    const swiper = new Swiper('.swiper-container', {
      spaceBetween: 0,
      effect: 'fade',
      centeredSlides: true,
      loop: true,
      autoplay: {
        delay: 4000,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }
    });
  }

}

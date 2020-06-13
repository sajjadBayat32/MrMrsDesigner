import { Component, OnInit } from '@angular/core';
import Swiper from 'swiper';

@Component({
  selector: 'app-home-section5',
  templateUrl: './home-section5.component.html',
  styleUrls: ['./home-section5.component.css']
})
export class HomeSection5Component implements OnInit {

  titles = [
    'سایزهای مختلف',
    'نحوه قرارگیری عکس در آلبوم',
    'نحوه ثبت سفارش',
    'عقد‌وعروسی',
    'کودک',
    'بزرگ‌سال',
    'لوازم جانبی',
    'ویژه',
    'سفر',
  ];
  constructor() { }

  ngOnInit() {
    this.createSlider();
  }

  createSlider() {

  }

}

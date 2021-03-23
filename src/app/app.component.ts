import { Component, OnInit } from '@angular/core';
import {
   SwiperConfigInterface,
} from 'ngx-swiper-wrapper';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  index: number;
  slides = [
    { id: 1, title: 'Mobile internet', action: 'Start here', link: '#' },
    { id: 2, title: 'Home internet', action: 'Start here', link: '#' },
    { id: 3, title: 'Get a device', action: 'Start here', link: '#' },
    { id: 4, title: 'Add a phone-line', action: 'Start here', link: '#' },
    { id: 5, title: 'Upgrade', action: 'Start here', link: '#' }
  ];

  public config: SwiperConfigInterface = {
    direction: 'horizontal',
    keyboard: true,
    mousewheel: false,
    scrollbar: false,
    navigation: {
      nextEl: '.custom-swiper-button-next',
      prevEl: '.custom-swiper-button-prev',
    },
    pagination: false,
    centeredSlides: true,
    loop: true,
    grabCursor: true,
    breakpoints: {
      1080: {
        slidesPerView: 5,
        spaceBetween: 16,
        centeredSlides: true
      },
      1366: {
        slidesPerView: 5,
        spaceBetween: 24,
        slidesOffsetBefore: 30,
        centeredSlides: true
      },
      1920: {
        slidesPerView: 5,
        spaceBetween: 24,
        centeredSlides: true,
      }
    }
  };

  constructor() { }

  ngOnInit(): void {
  }

  gotoLink(link: string) {
    console.log('goto link', link);
  }
trackIndex(index) {
  console.log(index);

}
}

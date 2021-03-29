import { Component, OnInit } from '@angular/core';
import {
   SwiperConfigInterface,
} from 'ngx-swiper-wrapper';
import { fromEvent, Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  resizeObservable$: Observable<Event>;
  private resizeSubscription$: Subscription;
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
    keyboard: false,
    mousewheel: false,
    scrollbar: false,
    pagination: false,
    initialSlide: 2,
    grabCursor: true,
    navigation: {
      nextEl: '.custom-swiper-button-next',
      prevEl: '.custom-swiper-button-prev',
    },

    breakpoints: {
      1080: {
        slidesPerView: 5,
        spaceBetween: 16,
        centeredSlides: true,

      },
      1366: {
        slidesPerView: 5,
        spaceBetween: 24,
        centeredSlides: true,

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
    this.resizeObservable$ = fromEvent(window, 'resize');
    this.resizeSubscription$ = this.resizeObservable$.subscribe( evt => {
      console.log('event: ', evt);
      document.defaultView.location.reload();
    });
  }

  gotoLink(link: string) {
    console.log('goto link', link);
  }
trackIndex(index) {
  // console.log(index);

}
}

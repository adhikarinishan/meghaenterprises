import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

import {
  NgbCarousel,
  NgbSlideEvent,
  NgbSlideEventSource,
} from '@ng-bootstrap/ng-bootstrap';
import { TranslateService } from '@ngx-translate/core';
import { DataService } from '../Shared/data-service.service';

@Component({
  selector: 'app-imagecrousal',
  templateUrl: './imagecrousal.component.html',
  styleUrls: ['./imagecrousal.component.css'],
  providers: [NgbCarouselConfig],
})
export class ImagecrousalComponent implements OnInit {
  images = [
    '/assets/images/HousingSocieties.jpg',
    '/assets/images/Building2.jpg',
    '/assets/images/Building4.jpg',
  ];
  imageDetails = [];

  constructor(
    config: NgbCarouselConfig,
    public translate: TranslateService,
    public service: DataService
  ) {
    config.interval = 3000;
    config.keyboard = true;
    config.pauseOnHover = true;
  }

  ngOnInit(): void {
    // this.images = [700, 800, 807].map(
    //   (n) => `https://picsum.photos/id/${n}/900/500`
    // );
    // this.imageDetails = [
    //   {
    //     imgUrl: '/assets/images/Building1.jpg',
    //     imgAlt: 'Building1',
    //   },
    //   {
    //     imgUrl: '/assets/images/Building2.jpg',
    //     imgAlt: 'Building2',
    //   },
    //   {
    //     imgUrl: '/assets/images/Building3.jpg',
    //     imgAlt: 'Building3',
    //   },
    //   {
    //     imgUrl: '/assets/images/Building4.jpg',
    //     imgAlt: 'Building4',
    //   },
    //   {
    //     imgUrl: '/assets/images/Building6.jpg',
    //     imgAlt: 'Building5',
    //   },
    //   ,
    //   {
    //     imgUrl: '/assets/images/Building6.jpg',
    //     imgAlt: 'Building5',
    //   },
    // ];
    this.addImages();
  }

  paused = false;
  unpauseOnArrow = false;
  pauseOnIndicator = false;
  pauseOnHover = true;
  pauseOnFocus = true;

  @ViewChild('carousel', { static: true }) carousel: NgbCarousel;

  togglePaused() {
    if (this.paused) {
      this.carousel.cycle();
    } else {
      this.carousel.pause();
    }
    this.paused = !this.paused;
  }

  onSlide(slideEvent: NgbSlideEvent) {
    if (
      this.unpauseOnArrow &&
      slideEvent.paused &&
      (slideEvent.source === NgbSlideEventSource.ARROW_LEFT ||
        slideEvent.source === NgbSlideEventSource.ARROW_RIGHT)
    ) {
      this.togglePaused();
    }
    if (
      this.pauseOnIndicator &&
      !slideEvent.paused &&
      slideEvent.source === NgbSlideEventSource.INDICATOR
    ) {
      this.togglePaused();
    }
  }

  addImages() {
    // for (let i = 1; i <= 6; i++) {
    for (let i = 1; i <= 3; i++) {
      const imgDt = {
        //imgUrl: '/assets/images/Building' + i + '.jpg',
        imgUrl: './assets/images/Building' + i + '.jpg', //changes on 01- June 2024
        imgAlt: 'Building' + i,
        imgSeg: i,
        imgTextColor: this.getImgTextColor(i),
      };
      this.imageDetails.push(imgDt);
    }
  }
  slideActivate(ngbSlideEvent: NgbSlideEvent) {
    // console.log(ngbSlideEvent.source);
    // console.log(ngbSlideEvent.paused);
    // console.log(NgbSlideEventSource.INDICATOR);
    // console.log(NgbSlideEventSource.ARROW_LEFT);
    // console.log(NgbSlideEventSource.ARROW_RIGHT);
  }

  getImgTextColor(imgNum: any) {
    const imgDetails = [
      {
        imgId: 1,
        imgName: 'ho. sco',
        imgTextColour: '#f60404',
      },
      {
        imgId: 2,
        imgName: 'deemed',
        // imgTextColour: '#0e04a2',
        imgTextColour: '#f60404',
      },
      {
        imgId: 3,
        imgName: 'rede',
        imgTextColour: '#ffffff',
      },
    ];

    const imgTextColor = imgDetails.find((x) => x.imgId == imgNum);
    //console.log('color => ' + imgTextColor.imgTextColour);
    return imgTextColor.imgTextColour;
  }
}

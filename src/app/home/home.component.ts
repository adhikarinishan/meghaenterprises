import { Component, OnInit, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { DataService } from '../Shared/data-service.service';

import {
  NgbCarousel,
  NgbSlideEvent,
  NgbSlideEventSource,
} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  // images = [62, 83, 466, 965, 982, 1043, 738].map(
  //   (n) => `https://picsum.photos/id/${n}/900/500`
  // );

  // images = [
  //   '/assets/images/HousingSocieties.jpg',
  //   '/assets/images/Building2.jpg',
  //   '/assets/images/Building1.jpeg',
  // ];

  // paused = false;
  // unpauseOnArrow = false;
  // pauseOnIndicator = false;
  // pauseOnHover = true;
  // pauseOnFocus = true;

  // @ViewChild('carousel', { static: true }) carousel: NgbCarousel;

  // togglePaused() {
  //   if (this.paused) {
  //     this.carousel.cycle();
  //   } else {
  //     this.carousel.pause();
  //   }
  //   this.paused = !this.paused;
  // }

  // onSlide(slideEvent: NgbSlideEvent) {
  //   if (
  //     this.unpauseOnArrow &&
  //     slideEvent.paused &&
  //     (slideEvent.source === NgbSlideEventSource.ARROW_LEFT ||
  //       slideEvent.source === NgbSlideEventSource.ARROW_RIGHT)
  //   ) {
  //     this.togglePaused();
  //   }
  //   if (
  //     this.pauseOnIndicator &&
  //     !slideEvent.paused &&
  //     slideEvent.source === NgbSlideEventSource.INDICATOR
  //   ) {
  //     this.togglePaused();
  //   }
  // }
  list1;
  list2;
  list3;
  listData;
  constructor(
    public translate: TranslateService,
    public service: DataService
  ) {}

  ngOnInit(): void {
    this.getClientList();
  }

  getClientList() {
    this.list1 = [
      'Vrundavan Co.Op Housing Society Ltd., Ambernath (E)',
      'Reliance Apex Co.Op Housing Federation Ltd., Ambernath (E)',
      'Shiv-Sonal Palace Co.Op Housing Society Ltd., Ambernath (E)',
      'Shree Dattatray Co.Op Housing Society Ltd., Kulgaon, Badlapur (W)',
      'Riddhi Co.Op Housing Society Ltd., Kalyan (W)',
      'Siddhi Co.Op Housing Society Ltd., Kalyan(W)',
      'Riddhi Siddhi Co.Op Housing Society Ltd., Nandivali,Kalyan(E)',
      'Om Yashodhara Co.Op Housing Society Ltd.,Katemanivali,Kalyan(E)',
      'Shree Sai Deepak Co.Op Housing Society Ltd.,Katemanivali,Kalyan(E)',
      'Yogesh Co.Op Housing Society Ltd., Near Prem Auto,Kalyan(W)',
    ];
    this.list2 = [
      'Mukti Co.Op Housing Society Ltd., Ulhasnagar-4',
      'Sweet New House Co.Op Housing Society Ltd., Kalyan(E)',
      'Deepkunj  Co.Op Housing Society Ltd., Dombivali (W)',
      'Siddhashree Co.Op Housing Society Ltd., Dombivali (W)',
      'Siddhesh Arcade Co.Op Housing Society Ltd., Dombivali (W)',
      'Sai Prasad Co.Op Housing Society Ltd., Ambernath (E)',
      'Kamlesh Co.Op Housing Society Ltd., Ambernath (E)',
      'Muktai Co.Op Housing Society Ltd., Ulhasnagar- 4',
      'Kanwar Apartment Co.Op Housing Society Ltd., Ulhasnagar- 4',
      'Vaibhav-Vihar Co.Op Housing Society Ltd., Ambernath (E)',
    ];
    this.list3 = [
      'Vaishnavi Park Co.Op Housing Society Ltd., Ulhasnagar- 4',
      'Katarias Shivsagar Co.Op Housing Society Ltd., Ambernath (E)',
      'Shivsagar Co.Op Housing Society Ltd., Ambernath (E)',
      'Radha VasantVihar R2 Co.Op Housing Society Ltd., Ambernath (E)',
      'Radha VasantVihar Co.Op Housing Society Ltd., Ambernath (E)',
      'Reliance Apex Co.Op Housing Federation Ltd., Ambernath (E)',
      'Ave Mariya Co.Op Housing Society Ltd., Ambernath (W)',
      'Sai Heramb Co.Op Housing Society Ltd., Ambernath (E)',
      'Bhagyoday Co.Op Housing Society Ltd., Ambernath (E)',
    ];

    this.listData = [
      'Vrundavan Co.Op Housing Society Ltd., Ambernath (E)',
      'Reliance Apex Co.Op Housing Federation Ltd., Ambernath (E)',
      'Shiv-Sonal Palace Co.Op Housing Society Ltd., Ambernath (E)',
      'Shree Dattatray Co.Op Housing Society Ltd., Kulgaon, Badlapur (W)',
      'Riddhi Co.Op Housing Society Ltd., Kalyan (W)',
      'Siddhi Co.Op Housing Society Ltd., Kalyan(W)',
      'Riddhi Siddhi Co.Op Housing Society Ltd., Nandivali,Kalyan(E)',
      'Om Yashodhara Co.Op Housing Society Ltd.,Katemanivali,Kalyan(E)',
      'Shree Sai Deepak Co.Op Housing Society Ltd.,Katemanivali,Kalyan(E)',
      'Yogesh Co.Op Housing Society Ltd., Near Prem Auto,Kalyan(W)',
      'Mukti Co.Op Housing Society Ltd., Ulhasnagar-4',
      'Sweet New House Co.Op Housing Society Ltd., Kalyan(E)',
      'Deepkunj  Co.Op Housing Society Ltd., Dombivali (W)',
      'Siddhashree Co.Op Housing Society Ltd., Dombivali (W)',
      'Siddhesh Arcade Co.Op Housing Society Ltd., Dombivali (W)',
      'Sai Prasad Co.Op Housing Society Ltd., Ambernath (E)',
      'Kamlesh Co.Op Housing Society Ltd., Ambernath (E)',
      'Muktai Co.Op Housing Society Ltd., Ulhasnagar- 4',
      'Kanwar Apartment Co.Op Housing Society Ltd., Ulhasnagar- 4',
      'Vaibhav-Vihar Co.Op Housing Society Ltd., Ambernath (E)',
      'Vaishnavi Park Co.Op Housing Society Ltd., Ulhasnagar- 4',
      'Katarias Shivsagar Co.Op Housing Society Ltd., Ambernath (E)',
      'Shivsagar Co.Op Housing Society Ltd., Ambernath (E)',
      'Radha VasantVihar R2 Co.Op Housing Society Ltd., Ambernath (E)',
      'Radha VasantVihar Co.Op Housing Society Ltd., Ambernath (E)',
      'Reliance Apex Co.Op Housing Federation Ltd., Ambernath (E)',
      'Ave Mariya Co.Op Housing Society Ltd., Ambernath (W)',
      'Sai Heramb Co.Op Housing Society Ltd., Ambernath (E)',
      'Bhagyoday Co.Op Housing Society Ltd., Ambernath (E)',
    ];
  }
}

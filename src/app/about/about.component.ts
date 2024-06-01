import { Component, OnInit } from '@angular/core';
import {
  faFilm,
  faMapMarkedAlt,
  faMapMarkerAlt,
} from '@fortawesome/free-solid-svg-icons';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
  filmIcon = faFilm;
  mapMarkedAlt = faMapMarkedAlt;
  mapMarkerAlt = faMapMarkerAlt;
  constructor(public translate: TranslateService) {}

  ngOnInit(): void {}
}

import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { DataService } from 'src/app/Shared/data-service.service';

@Component({
  selector: 'app-society-registration',
  templateUrl: './society-registration.component.html',
  styleUrls: ['./society-registration.component.css'],
})
export class SocietyRegistrationComponent implements OnInit {
  constructor(
    public translate: TranslateService,
    public service: DataService
  ) {}

  ngOnInit(): void {}
}

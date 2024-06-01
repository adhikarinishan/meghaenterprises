import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { DataService } from 'src/app/Shared/data-service.service';

@Component({
  selector: 'app-redevelopment',
  templateUrl: './redevelopment.component.html',
  styleUrls: ['./redevelopment.component.css'],
})
export class RedevelopmentComponent implements OnInit {
  constructor(
    public translate: TranslateService,
    public service: DataService
  ) {}

  ngOnInit(): void {}
}

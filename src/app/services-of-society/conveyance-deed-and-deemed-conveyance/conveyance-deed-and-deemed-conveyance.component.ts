import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { DataService } from 'src/app/Shared/data-service.service';

@Component({
  selector: 'app-conveyance-deed-and-deemed-conveyance',
  templateUrl: './conveyance-deed-and-deemed-conveyance.component.html',
  styleUrls: ['./conveyance-deed-and-deemed-conveyance.component.css'],
})
export class ConveyanceDeedAndDeemedConveyanceComponent implements OnInit {
  constructor(
    public translate: TranslateService,
    public service: DataService
  ) {}

  ngOnInit(): void {}
}

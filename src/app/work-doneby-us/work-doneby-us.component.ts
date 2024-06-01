import { Component, OnInit } from '@angular/core';
import { DataService } from '../Shared/data-service.service';

@Component({
  selector: 'app-work-doneby-us',
  templateUrl: './work-doneby-us.component.html',
  styleUrls: ['./work-doneby-us.component.css'],
})
export class WorkDonebyUsComponent implements OnInit {
  constructor(public service: DataService) {}

  ngOnInit(): void {}
}

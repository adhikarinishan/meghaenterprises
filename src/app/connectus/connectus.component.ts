import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-connectus',
  templateUrl: './connectus.component.html',
  styleUrls: ['./connectus.component.css']
})
export class ConnectusComponent implements OnInit {

  constructor(public translate : TranslateService) { }

  ngOnInit(): void {
  }

}

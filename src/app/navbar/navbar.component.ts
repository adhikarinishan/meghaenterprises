import { Component, ElementRef, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { DataService } from '../Shared/data-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  isNavBarCollapsed: boolean = false;
  private wasInside = false;

  selLang: string = 'Select language';

  languages = [
    {
      lang: 'en',
      langName: 'English',
      langCode: 'en-US',
    },
    {
      lang: 'hi',
      langName: 'हिंदी',
      langCode: 'hi-IN',
    },
    {
      lang: 'mr',
      langName: 'मराठी',
      langCode: 'mr-IN',
    },
  ];

  constructor(
    private router: Router,
    public service: DataService,
    private el: ElementRef,
    public translate: TranslateService
  ) {}

  ngOnInit(): void {
    const langSel = this.languages.find(
      (lng) => lng.lang === this.service.defaultBrowserLang
    );
    this.selLang = langSel.langName;
  }

  toggleNavbar() {
    this.isNavBarCollapsed = !this.isNavBarCollapsed;

    if (this.isNavBarCollapsed) {
      this.service.updateDevice(this.isNavBarCollapsed);
    } else {
      this.service.updateDevice(false);
    }
  }

  // OnRedirect(url: string) {
  //   this.router.navigate([url]);
  // }

  onNavchange() {
    this.isNavBarCollapsed = false;
    this.service.updateDevice(false);
  }

  @HostListener('click')
  clickInside() {
    //console.log('click inside!');
    this.wasInside = true;
  }

  @HostListener('document:click')
  clickout() {
    if (!this.wasInside) {
      //console.log('click outside3!');
      if (this.isNavBarCollapsed) {
        //console.log('NavBarCollapsed!');
        this.isNavBarCollapsed = false;
      }
    }
    this.wasInside = false;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    const windowHeight = event.target.innerWidth;

    if (windowHeight < 600) {
      // mobile device

      // console.log('is mobile device 1');
      // console.log(this.service.isMobileDevice);
      this.service.updateDevice(true);
      // console.log('screen size');
      // console.log(windowHeight);
      // console.log('is mobile device 2');
      // console.log(this.service.isMobileDevice);
      // console.log('isNavBarCollapsed');
      // console.log(this.isNavBarCollapsed);
    } else {
      this.service.updateDevice(false);
    }
    //console.log(event.target.innerHeight);
  }
  onSelectLang(languageSelect: string, langCode: string, langName: string) {
    this.isNavBarCollapsed = false;
    //this.service.updateDevice(false); // commented on 25/08/2021
    // console.log('lang :- ' + languageSelect + ' code : ' + langCode);
    this.selLang = langName;
    // this.translate.currentLang = languageSelect; //langCode;
    this.translate.use(languageSelect);
    //this.translate.setDefaultLang(languageSelect);

    //#region // added on 25/08/2021
    if (this.isNavBarCollapsed) {
      this.service.updateDevice(this.isNavBarCollapsed);
    } else {
      this.service.updateDevice(false);
    }
    //#endregion
  }

  onSelectWork() {
    this.isNavBarCollapsed = false;
    this.service.updateDevice(false);
  }
}

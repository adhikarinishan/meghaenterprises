import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { I18mModule } from './i18m/i18m.module';
import { DropDownDirective } from './Shared/dropdown-directive.directive';
import { AppRoutingModule } from './app-routing.module';
// import { NgxBootstrapIconsModule } from 'ngx-bootstrap-icons';
import { NgxBootstrapIconsModule, allIcons } from 'ngx-bootstrap-icons';
import { alarm, alarmFill, alignBottom } from 'ngx-bootstrap-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ConnectusComponent } from './connectus/connectus.component';
import { SocietyRegistrationComponent } from './services-of-society/society-registration/society-registration.component';
import { ConveyanceDeedAndDeemedConveyanceComponent } from './services-of-society/conveyance-deed-and-deemed-conveyance/conveyance-deed-and-deemed-conveyance.component';
import { RedevelopmentComponent } from './services-of-society/redevelopment/redevelopment.component';
import { IvyCarouselModule } from 'angular-responsive-carousel';
import { ImagecrousalComponent } from './imagecrousal/imagecrousal.component';
import { TestComponent } from './test/test.component';
import { WorkDonebyUsComponent } from './work-doneby-us/work-doneby-us.component';
import { ConveyanceDeedComponent } from './services-of-society/conveyance-deed/conveyance-deed.component';
import { DeemedConveyanceComponent } from './services-of-society/deemed-conveyance/deemed-conveyance.component';

const icons = {
  alarm,
  alarmFill,
  alignBottom,
};

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactComponent,
    FooterComponent,
    HomeComponent,
    NavbarComponent,
    DropDownDirective,
    ConnectusComponent,
    SocietyRegistrationComponent,
    ConveyanceDeedAndDeemedConveyanceComponent,
    RedevelopmentComponent,
    ImagecrousalComponent,
    TestComponent,
    WorkDonebyUsComponent,
    ConveyanceDeedComponent,
    DeemedConveyanceComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    I18mModule,
    // NgxBootstrapIconsModule.pick(icons) // only few icons
    NgxBootstrapIconsModule.pick(allIcons), // load all icons
    FontAwesomeModule,
    NgbModule,
    IvyCarouselModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

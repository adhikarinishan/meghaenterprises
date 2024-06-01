import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { ConveyanceDeedAndDeemedConveyanceComponent } from './services-of-society/conveyance-deed-and-deemed-conveyance/conveyance-deed-and-deemed-conveyance.component';
import { ConveyanceDeedComponent } from './services-of-society/conveyance-deed/conveyance-deed.component';
import { DeemedConveyanceComponent } from './services-of-society/deemed-conveyance/deemed-conveyance.component';
import { RedevelopmentComponent } from './services-of-society/redevelopment/redevelopment.component';
import { SocietyRegistrationComponent } from './services-of-society/society-registration/society-registration.component';
import { TestComponent } from './test/test.component';
import { WorkDonebyUsComponent } from './work-doneby-us/work-doneby-us.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  {
    path: 'ourWork',
    children: [
      { path: 'society-registration', component: SocietyRegistrationComponent },
      // {
      //   path: 'conveyancedeed-and-deemedconveyance',
      //   component: ConveyanceDeedAndDeemedConveyanceComponent,
      // },
      {
        path: 'conveyancedeed',
        component: ConveyanceDeedComponent,
      },
      {
        path: 'deemedconveyance',
        component: DeemedConveyanceComponent,
      },
      { path: 'redevelopment', component: RedevelopmentComponent },
      { path: 'work-done-by-us', component: WorkDonebyUsComponent },
    ],
  },
  // { path: 'test', component: TestComponent },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(appRoutes, {
      initialNavigation: 'enabled',
      scrollPositionRestoration: 'top',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}

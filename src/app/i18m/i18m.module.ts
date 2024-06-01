import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpClient, HttpClientModule } from '@angular/common/http';
import {
  TranslateLoader,
  TranslateModule,
  TranslateService,
} from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import {
  TranslateCacheModule,
  TranslateCacheService,
  TranslateCacheSettings,
} from 'ngx-translate-cache';
import { DataService } from '../Shared/data-service.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: translateLoaderFactory,
        deps: [HttpClient],
      },
    }),
    TranslateCacheModule.forRoot({
      cacheService: {
        provide: TranslateCacheService,
        useFactory: translateCacheFactory,
        deps: [TranslateService, TranslateCacheSettings],
      },
      cacheMechanism: 'Cookie',
    }),
  ],
  exports: [TranslateModule],
})
export class I18mModule {
  constructor(
    translate: TranslateService,
    translateCacheService: TranslateCacheService,
    private dataService: DataService
  ) {
    // translate.addLangs(['en', 'ru']);
    translateCacheService.init();
    translate.addLangs(['en', 'hi', 'mr']);
    //const browserLang = translate.getBrowserLang();
    const browserLang =
      translateCacheService.getCachedLanguage() || translate.getBrowserLang();

    this.dataService.defaultBrowserLang = browserLang;
    //translate.use(browserLang.match(/en|ru/) ? browserLang : 'en');
    translate.use(browserLang.match(/en|mr|hi/) ? browserLang : 'en');
  }
 }


export function translateLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient);
}

export function translateCacheFactory(
  translateService: TranslateService,
  translateCacheSettings: TranslateCacheSettings
) {
  return new TranslateCacheService(translateService, translateCacheSettings);
}

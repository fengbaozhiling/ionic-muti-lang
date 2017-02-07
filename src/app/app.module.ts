import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { ItemDetailsPage } from '../pages/item-details/item-details';
import { ListPage } from '../pages/list/list';

import { TranslateModule } from 'ng2-translate/ng2-translate';

import {Http} from '@angular/http';
import {TranslateStaticLoader,TranslateLoader} from 'ng2-translate/ng2-translate';


import {TranslateService} from 'ng2-translate';
import {servicesInjectables} from '../service/service';

import {LangService} from '../service/service';



export function createTranslateLoader(http: Http) {
  return new TranslateStaticLoader(http, './assets/i18n', '.json');
}




@NgModule({
  declarations: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    TranslateModule.forRoot({
      provide: TranslateLoader,
      useFactory: (createTranslateLoader),
      deps: [Http]
    })

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler},servicesInjectables]
})
export class AppModule {
  constructor(translate: TranslateService,
              langService:LangService



  ) {
    langService.langType.subscribe({
      next: x => translate.use(x)
    })
    translate.setDefaultLang('en');
    translate.use('fr');
  }

}

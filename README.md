demo 运行需要先安装ionic，cordova
=====================
```bash
$ npm install -g ionic cordova
```

然后进入目录运行:
```bash
$ npm install 
```
安装依赖包完成后运行
```bash
$ ionic serve
```
使用 ng2-translate 来实现翻译的功能
文档：https://github.com/ocombe/ng2-translate

语言包存储在/assets/il8n目录

具体的实现逻辑：

---LangService.ts---
``` typeScript
import {Injectable} from '@angular/core';
import {Subject, Observable} from 'rxjs';



@Injectable()
export class LangService {
  // a stream that publishes new messages only once
  langType: Subject<string> = new Subject<string>();
}



export let LangServiceInjectables: Array<any> = [
  LangService
];
```

--- app.module.ts ---
``` typeScript
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
```

---hello-ionic.ts---
``` typeScript
import { Component } from '@angular/core';

import {LangService} from '../../service/service';



@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage {
  constructor(
    public langService: LangService,
  ) {
    langService.langType.subscribe({
      next: x => console.log('got value ' + x)
    })
  }

  current:string = 'fr'

  changeLang(lang: string): void {
    this.langService.langType.next(lang)
    this.current = lang;
    console.log(lang)
  }
}

```

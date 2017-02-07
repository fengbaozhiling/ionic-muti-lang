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

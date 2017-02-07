import {Http} from '@angular/http';
import {TranslateStaticLoader,TranslateLoader} from 'ng2-translate/ng2-translate';

export function createTranslateLoader(http: Http) {
  return new TranslateStaticLoader(http, 'assets/i18n', '.json');
}

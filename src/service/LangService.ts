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

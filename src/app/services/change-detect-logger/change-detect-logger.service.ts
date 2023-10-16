import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChangeDetectLoggerService {

  constructor() { }

  log(name: string) {
    console.log(`changeDetectLog -> ${name}`)
  }
}

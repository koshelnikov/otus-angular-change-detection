import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ChangeDetectLoggerService} from "./services/change-detect-logger/change-detect-logger.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-change-detection';

  constructor(
    private changeDetectLoggerService: ChangeDetectLoggerService
  ) {
  }

  ngDoCheck() {
    console.log('AppComponent ngDoCheck')
  }

  onButtonClick() {

  }

  onMouseMove() {
  }

  onSetTimeoutClick() {
    setTimeout(() => {}, 1000)
  }

  onPromiseClick() {
    fetch('https:/httpstat.us/200').then(() => {
      console.log('fetch Promise -> then()')
    })
  }

  get changeDetectLog() {
    return this.changeDetectLoggerService.log('app')
  }
}

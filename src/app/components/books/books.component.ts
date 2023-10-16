import { Component } from '@angular/core';
import {ChangeDetectLoggerService} from "../../services/change-detect-logger/change-detect-logger.service";

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent {

  constructor(private logger: ChangeDetectLoggerService) {
  }


  get changeDetectorLog() {
    this.logger.log('Books')
    return ''
  }
}

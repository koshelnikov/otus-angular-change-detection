import {ChangeDetectorRef, Component} from '@angular/core';
import {ChangeDetectLoggerService} from "../../../services/change-detect-logger/change-detect-logger.service";

@Component({
  selector: 'app-user-preview',
  templateUrl: './user-preview.component.html',
  styleUrls: ['./user-preview.component.scss']
})
export class UserPreviewComponent {

  constructor(private logger: ChangeDetectLoggerService) {
  }

  get changeDetectLog() {
    this.logger.log('UserPreview')
    return ''
  }
}

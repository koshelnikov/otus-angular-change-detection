import {ChangeDetectorRef, Component} from '@angular/core';
import {ChangeDetectLoggerService} from "../../services/change-detect-logger/change-detect-logger.service";

@Component({
  selector: 'app-change-detector-ref',
  templateUrl: './change-detector-ref.component.html',
  styleUrls: ['./change-detector-ref.component.scss']
})
export class ChangeDetectorRefComponent {
  constructor(private logger: ChangeDetectLoggerService, private changeDetectorRef: ChangeDetectorRef) {
    this.changeDetectorRef.detach();
  }

  get changeDetectorLog() {
    this.logger.log('ChangeDetectorRef');

    return 'Data After Detect Changes'
  }

  detectChanges() {
    this.changeDetectorRef.detectChanges()
  }
}

import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {User} from "./user.type";
import {ChangeDetectLoggerService} from "../../../services/change-detect-logger/change-detect-logger.service";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserComponent {
 @Input()
  value: User | null = null;

  constructor(private logger: ChangeDetectLoggerService) {
  }


  get name() {
   return this.value ? this.value.name : null
 }

 get changeDetectLog() {
   this.logger.log('User')
   return '';
 }
}

import {Component, NgZone} from '@angular/core';
import {ChangeDetectLoggerService} from "../../services/change-detect-logger/change-detect-logger.service";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {

  user = {id: 1, name: 'User Name'}

  constructor(private logger: ChangeDetectLoggerService) {
  }

  changeUser() {
    this.user = {... this.user, name: this.user.name + ' Changed'}
  }

  get changeDetectLog() {
    this.logger.log('Users')
    return ''
  }
}

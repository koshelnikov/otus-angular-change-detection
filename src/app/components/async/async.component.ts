import {ChangeDetectionStrategy, ChangeDetectorRef, Component, NgZone} from '@angular/core';
import {delay, Observable, of, repeat} from "rxjs";
import {ChangeDetectLoggerService} from "../../services/change-detect-logger/change-detect-logger.service";




@Component({
  selector: 'app-async',
  templateUrl: './async.component.html',
  styleUrls: ['./async.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AsyncComponent {
  data$: Observable<number[]> | null = null;
  data: string[] = []

  constructor(
    private logger: ChangeDetectLoggerService,
    private changeDetectorRef: ChangeDetectorRef
  ) {
    this.doAsyncPipe();
    //this.doAsync();
  }

  private doAsyncPipe() {
    this.data$ = of([1, 2, 3]).pipe(delay(1000));
  }

  private doAsync() {
    of('data')
      .pipe(
        delay(1000),
        repeat({count: 2})
      )
      .subscribe(data => {
        this.data.push(data)

        if (this.data.length === 2) {
          //this.changeDetectorRef.markForCheck();
        }
      })
  }


  get changeDetetorLog() {
    this.logger.log('Async')
    return ''
  }
}

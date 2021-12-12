import {Component, ViewContainerRef,} from '@angular/core';
import {AppService} from '../Services/app.service';
import {enableRipple} from '@syncfusion/ej2-base';

enableRipple(true);

@Component({
  selector: 'app-root',
  template: `
    <mat-icons>home

    </mat-icons>
  `,
})
export class AppComponent {
  constructor(private appService: AppService,
              private vcr: ViewContainerRef) {
    this.appService.setAppComponentRef(vcr);
  }
}

import {Component, Input, ViewContainerRef} from '@angular/core';
import {AppService} from '../Services/app.service';
import {enableRipple} from '@syncfusion/ej2-base';

enableRipple(true);

@Component({
  selector: 'app-root',
  styles: [''],
  template: `
    <bpa-notification-editor></bpa-notification-editor>
  `,
})

/**
 * @property {type} title - تعداد روزهای مرخصی
 */
export class AppComponent {
  @Input() title = 25;

  constructor(private appService: AppService, private vcr: ViewContainerRef) {
    this.appService.setAppComponentRef(vcr);
  }

  /**
   * دریافت اطلاعات کاربر از دیتابیس
   * @param userId {string} شناسه کاربر
   */
  getUser(userId: string) {
  }
}



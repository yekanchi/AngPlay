import {
  Component,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { AppService } from '../Services/app.service';
import { HttpClient } from '@angular/common/http';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);
@Component({
  selector: 'app-root',
  template: `
    <ng-template>
      <div>
        Hello world
        <button (click)="onClick($event)">test</button>
      </div>
    </ng-template>
    <bpas-progress-bar></bpas-progress-bar>
    <bpas-side-nav>
      <button enable ejs-button (click)="onClick($event)" >
        ثبت درخواست جدید
      </button>
    </bpas-side-nav>
  `,
})
export class AppComponent {
  @ViewChild(TemplateRef) dialogTemplate!: any;
  title = 'AngPlay';

  constructor(
    private appService: AppService,
    private http: HttpClient,
    private vcr: ViewContainerRef
  ) {
    this.appService.setAppComponentRef(vcr);
  }

  onClick(event: MouseEvent) {
    // this.appService.showSnackMessage("فرآیند با موفیت ایجاد شد", "بستن");
    // this.http.get("https://jsonplaceholder.typicode.com/photos").subscribe(result => console.log(result));
    // this.appService.showWindow(this.dialogTemplate);
  }
}

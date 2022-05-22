import {Component} from '@angular/core';
import {AppService} from "../../Services/app.service";

@Component({
  selector: 'bpas-progress-bar',
  styles: [`
    .bpas-progress-bar {
      position: fixed;
      width: 100%;
      z-index: 999;
    }
  `],
  template: `
    <div class="bpas-progress-bar" *ngIf="this.appService.showProgressbar | async">
      <!--      <mat-progress-bar mode="indeterminate"></mat-progress-bar>-->
    </div>
  `
})
export class BpasProgressBarComponent {
  appService: AppService;

  constructor(appService: AppService) {
    this.appService = appService;
  }
}

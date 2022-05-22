import {Component, ContentChild, Input, TemplateRef} from '@angular/core';
import {PositionDataModel} from "@syncfusion/ej2-angular-popups";

@Component({
  selector: 'bpas-dialog',
  styles: [`
    .e-dialog {
      box-shadow: rgba(0, 0, 0, 0.32) 0px 2px 10px 2px;
    }

    .e-dialog .e-dlg-header-content {
      border-radius: 10px 10px 0 0;
      padding: 0;
      background-color: gold;
      text-align: center;
    }

    .bpas-dialog-close-button {
      float: right;
      width: 40px;
      text-align: center;
      position: absolute;
      top: 0;
      right: 0;
      vertical-align: bottom;
      border-radius: 0 10px 0 0;
    }

    .bpas-dialog-close-button:hover {
      background-color: #ff4545;
      color: white;
      cursor: pointer;
    }

    .bpas-dialog-title {
      font-size: 16px;
      font-weight: bold;
      //font-family: Vazir;
    }


    .e-dlg-header {
      width: 100%;
    }

    .bpas-dialog-header {
      width: 100%;
    }

    .e-dialog .e-footer-content {
      border-top: 2px solid #00000017;
      border-radius: 0 0 10px 10px;
    }

    .e-dialog .e-dlg-content {
      border-radius: 0 0 10px 10px;
    }

    .bpas-dialog-content {
      border-radius: 15px;
      padding: 5px;
    }
  `],
  template: `
    <ejs-dialog #template
                [allowDragging]="true"
                [visible]="true"
                [position]="position"
                [isModal]="true"
                [enableResize]="true"
                [height]="height"
                [width]="width">
      <ng-template #header class="bpas-dialog-header">
        <div class="bpas-dialog-title">{{title}}</div>
        <div class="bpas-dialog-close-button">
          <!--          <mat-icon style="vertical-align: bottom;">close</mat-icon>-->
        </div>
      </ng-template>
      <ng-template #content>
        <div *ngIf="contentTmpl" class="bpas-dialog-content">
          <ng-container *ngTemplateOutlet="contentTmpl"></ng-container>
        </div>
      </ng-template>
      <ng-container *ngIf="footerTmpl">
        <ng-template #footerTemplate>
          <div class="bpas-dialog-footer">
            <ng-container *ngTemplateOutlet="footerTmpl"></ng-container>
          </div>
        </ng-template>
      </ng-container>
    </ejs-dialog>
  `,
})
export class BpasDialogComponent {
  @ContentChild('header') headerTmpl!: TemplateRef<any>;
  @ContentChild('content') contentTmpl!: TemplateRef<any>;
  @ContentChild('footer') footerTmpl!: TemplateRef<any>;
  @Input() title = '';

  @Input() width = 800;
  @Input() height = 400;
  public position: PositionDataModel = {X: 'center', Y: 'top'};

  // @Input()
  constructor() {
  }

  ngOnInit() {
  }
}

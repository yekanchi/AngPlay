import {Component, Input, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-shared-dialog',
  styles: [``],
  template: `
    <h2>this is dialog component</h2>
    <ng-template>
    </ng-template>
      <div>
        this is true
      </div>
      <!--      <ng-container *ngTemplateOutlet="dialogInnerTemplate; context: {data: data}">-->
      <!--      </ng-container>-->

  `,

})
export class SharedDialogComponent {
  @ViewChild(TemplateRef) matDialogTemplate!: any;
  @Input() dialogInnerTemplate: TemplateRef<any> | null = null;

  constructor(private matDialog: MatDialog) {
  }

  showMatDialog() {
    console.log(this.matDialogTemplate);
    if (this.dialogInnerTemplate != null) {
      this.matDialog.open(this.dialogInnerTemplate);
    }
  }
}

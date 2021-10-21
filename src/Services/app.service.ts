import {ComponentFactoryResolver, Injectable, TemplateRef, ViewContainerRef} from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import {BehaviorSubject, ReplaySubject} from 'rxjs';
import {MatDialog} from "@angular/material/dialog";
import {SharedDialogComponent} from "../app/shared/shared-dialog.component";
import {Overlay} from "@angular/cdk/overlay";
import {ComponentPortal} from "@angular/cdk/portal";

class DialogCommand {
  template?: TemplateRef<any>;
}


@Injectable({
  providedIn: 'root'
})
export class AppService {
  appComponentRef!: ViewContainerRef;
  showProgressbar = new BehaviorSubject<boolean>(false);
  dialogCommand = new ReplaySubject<DialogCommand>(1);

  constructor(private snackBar: MatSnackBar,
              private overlay: Overlay,
              private dialog: MatDialog,
              private cfr: ComponentFactoryResolver) {
  }

  setAppComponentRef(vcr: ViewContainerRef) {
    this.appComponentRef = vcr;
  }

  showSnackMessage(message: string, action: string) {
    this.snackBar.open(message, action, {direction: 'rtl', duration: 2 * 1000})
  }

  showDialog(dialogContentTemplateRef: TemplateRef<any>): void {
    this.dialog.open(dialogContentTemplateRef);
  }

  showWindow(ref: TemplateRef<any>) {
    const factory = this.cfr.resolveComponentFactory(SharedDialogComponent);
    const component = this.appComponentRef.createComponent(factory);
    component.instance.dialogInnerTemplate = ref;
    component.instance.showMatDialog();
  }

  showOverlayWindow(ref: TemplateRef<any>) {
    const factory = this.cfr.resolveComponentFactory(SharedDialogComponent);
    const overlayRef = this.overlay.create(
      {
        hasBackdrop: true,
        positionStrategy: this.overlay.position().global().centerHorizontally().centerVertically()
      }
    );
    overlayRef.backdropClick().subscribe(res => {
      overlayRef.detach();
    });
    let portal = new ComponentPortal(factory.componentType);

    let component = overlayRef.attach<SharedDialogComponent>(portal);
    component.instance.showMatDialog();
    // component.instance.onCloseClick.subscribe(() => {
    //   overlayRef.detach();
    // });
  }

  log(obj: any): void {
    console.log(obj);
  }

  error(obj: any): void {
    console.error(obj);
  }

  warn(obj: any): void {
    console.warn(obj);
  }
}


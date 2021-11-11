import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {BpasDialogComponent, BpasProgressBarComponent} from './bpas-progress-bar.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {InterceptorService} from "../Services/interceptor.service";
import { BpasSideNavComponent } from './bpas-side-nav/bpas-side-nav.component';
import {MenuModule, SidebarModule, TreeViewModule} from "@syncfusion/ej2-angular-navigations";
import {BpasNavigationTree} from "./bpas-side-nav/bpas-navigation-tree.component";
import {MatDialogModule} from "@angular/material/dialog";
import { SharedDialogComponent } from './shared/shared-dialog.component';
import {ButtonModule} from "@syncfusion/ej2-angular-buttons";
import { MonacoEditorModule, NgxMonacoEditorConfig } from 'ngx-monaco-editor';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


const monacoConfig: NgxMonacoEditorConfig = {
  baseUrl: 'app-name/assets', // configure base path cotaining monaco-editor directory after build default: './assets'
  defaultOptions: { scrollBeyondLastLine: false }, // pass default options to be used
  onMonacoLoad: () => { console.log((<any>window).monaco); } // here monaco object will be available as window.monaco use this function to extend monaco editor functionalities.
};
@NgModule({
  declarations: [
    AppComponent,
    BpasProgressBarComponent,
    BpasSideNavComponent,
    BpasNavigationTree,
    BpasDialogComponent,
    SharedDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSnackBarModule,
    MatDialogModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatProgressBarModule,
    SidebarModule,
    TreeViewModule,
    MenuModule,
    ButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MonacoEditorModule.forRoot()
  ],
  bootstrap: [AppComponent],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true}]
})
export class AppModule { }

import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {BpasProgressBarComponent} from './shared/bpas-progress-bar.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {InterceptorService} from "../Services/interceptor.service";
import {MenuModule, SidebarModule, TreeViewModule} from "@syncfusion/ej2-angular-navigations";
import {MatDialogModule} from "@angular/material/dialog";
import {BpasDialogComponent} from './shared/bpas-dialog.component';
import {ButtonModule} from "@syncfusion/ej2-angular-buttons";
import {MonacoEditorModule} from 'ngx-monaco-editor';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BpasCodeEditorComponent} from './components/bpas-code-editor/bpas-code-editor.component';
import {MatIconModule} from '@angular/material/icon'
import {MatTabsModule} from "@angular/material/tabs";
import {MatInputModule} from "@angular/material/input";
import {FlexLayoutModule} from "@angular/flex-layout";
import {DialogModule} from "@syncfusion/ej2-angular-popups";
import {BpaNotificationEditorComponent} from "./components/bpa-notification-editor/bpa-notification-editor.component";

@NgModule({
  declarations: [
    AppComponent,
    BpasProgressBarComponent,
    BpasDialogComponent,
    BpasCodeEditorComponent,
    BpaNotificationEditorComponent
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
    MatIconModule,
    MonacoEditorModule.forRoot(),
    MatTabsModule,
    MatInputModule,
    FlexLayoutModule,
    DialogModule,
    // RichTextEditorAllModule
  ],
  bootstrap: [AppComponent],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true}]
})
export class AppModule {
}


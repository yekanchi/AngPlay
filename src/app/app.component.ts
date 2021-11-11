import {
  AfterContentChecked,
  AfterContentInit,
  Component,
  OnInit,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { AppService } from '../Services/app.service';
import { HttpClient } from '@angular/common/http';
import { enableRipple } from '@syncfusion/ej2-base';
import {
  EditorComponent,
  MonacoEditorModule,
  NgxEditorModel,
} from 'ngx-monaco-editor';

enableRipple(true);
@Component({
  selector: 'app-root',
  template: `
    <!-- <ng-template>
      <div>
        Hello world
        <button (click)="onClick($event)">test</button>

      </div>
    </ng-template> -->
    <!-- <bpas-progress-bar></bpas-progress-bar>
    <bpas-side-nav>
      <button enable ejs-button (click)="onClick($event)">
        ثبت درخواست جدید
      </button>
    </bpas-side-nav> -->
    <div style="height: 600px; padding: 20px;">
      <ngx-monaco-editor
        style="height: 100%;"
        [options]="editorOptions"
        [(ngModel)]="code"
        [model]="model"
        (onInit)="onInitEditor($event)">
      </ngx-monaco-editor>
    </div>
  `,
})
export class AppComponent implements OnInit, AfterContentChecked {
  @ViewChild(TemplateRef) dialogTemplate!: any;
  @ViewChild(EditorComponent) editor!: any;
  title = 'AngPlay';
  editorOptions = {
    theme: 'vs-dark',
    language: 'javascript',
    fontSize: '18px',
    mouseWheelZoom: true,
  };
  code: string = 'function x() {\n\t\tconsole.log("Hello world!");\n}';
  model: NgxEditorModel = {
    value: 'function x() {\n\t\tconsole.log("Hello world!");\n}',
    language: 'javascript',
  };
  constructor(private appService: AppService,
    private http: HttpClient,
    private vcr: ViewContainerRef) {
    this.appService.setAppComponentRef(vcr);
  }

  monaco!: any;
  onInitEditor(editor: any): void {
    this.monaco = editor;
  }
  ngAfterContentChecked(): void {
    throw new Error('Method not implemented.');
  }
  ngAfterContentInit(): void {
    console.log('editor');
    console.log(this.editor);
    console.log(this.monaco);
  }

  ngOnInit() { }

  onClick(event: MouseEvent) {
    // this.appService.showSnackMessage("فرآیند با موفیت ایجاد شد", "بستن");
    // this.http.get("https://jsonplaceholder.typicode.com/photos").subscribe(result => console.log(result));
    // this.appService.showWindow(this.dialogTemplate);
  }
}

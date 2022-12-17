import {Component, EventEmitter, Input, OnInit, Output, TemplateRef, ViewChild,} from '@angular/core';
import {EditorComponent, NgxEditorModel} from 'ngx-monaco-editor';
import {format} from 'sql-formatter';

@Component({
	selector: 'bpas-code-editor',
	styles: [
		`
			.bpas-code-editor {
				border: 2px solid black;
				border-radius: 10px;
			}

			.monaco-editor {
				border: 3px solid blue;
				border-radius: 2px;
			}
		`,
	],
	template: `
		<div class="bpas-code-editor" [style.height.px]="height" [style.width.px]="width">
			<button (click)="format()">format</button>
			<button (click)="onThemeToggle()">Dark</button>
			<ngx-monaco-editor
				class="monaco-editor"
				style="height: 100%;"
				[options]="editorOptions"
				[(ngModel)]="code"
				[model]="model"
				(onInit)="onInitEditor($event)">
			</ngx-monaco-editor>
		</div>
	`,
})
export class BpasCodeEditorComponent implements OnInit {
	@ViewChild(TemplateRef) dialogTemplate!: any;
	@ViewChild(EditorComponent) editor!: any;
	@Input() language: 'sql' | 'javascript' | 'json' = 'javascript';
	@Input() code = '';
	@Output() codeChange = new EventEmitter<string>();
	@Input() fontSize = 24;
	@Input() height = 600;
	@Input() width = 1000;

	editorOptions: any = {};
	model: NgxEditorModel = {
		value: '',
		language: '',
	};

	constructor() {
	}

	monaco!: any;

	ngOnInit() {
		this.setParams();
	}

	onInitEditor(editor: any): void {
		this.monaco = editor;
	}

	setParams() {
		this.editorOptions = {
			theme: 'vs-dark',
			language: this.language,
			fontSize: `${this.fontSize}`,
			fontFamily: `Consolas, 'SEGOE UI'`,
			mouseWheelZoom: true,
		};
		this.model = {
			value: this.code,
			language: this.language,
		};
		this.model = {...this.model};
		this.editorOptions = {...this.editorOptions};
	}

	format() {
		switch (this.language) {
			case 'sql':
				this.model.value = format(this.model.value, {
					language: 'tsql',
					indent: '    ',
					uppercase: true,
					linesBetweenQueries: 2,
				});
				// this.code = this.model.value;
				// this.codeChange.emit(this.code);
				break;
			case 'javascript':
				this.monaco.trigger('anyString', 'editor.action.formatDocument');
				break;
			default:
				this.monaco.trigger('anyString', 'editor.action.formatDocument');
				break;
		}
	}

	onThemeToggle() {
		if (this.editorOptions.theme === 'vs-dark') {
			this.editorOptions.theme = 'vs';
		} else {
			this.editorOptions.theme = 'vs-dark';
		}
		this.editorOptions = {...this.editorOptions};
	}
}

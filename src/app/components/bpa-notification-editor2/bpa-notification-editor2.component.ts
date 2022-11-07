import {Component, ViewEncapsulation} from '@angular/core';
import Tribute from "tributejs";
import {NumberParser} from "@syncfusion/ej2-base/intl";

@Component({
  selector: 'bpa-notification-editor2',
  styleUrls: ['bpa-notification-editor2.component.scss'],
  encapsulation: ViewEncapsulation.None,
  // providers: [ToolbarService, LinkService, ImageService, HtmlEditorService],
  template: `
    <div class="control-section">
      <div class="sample-container">
        <div class="default-section">
          <!--          <ejs-richtexteditor-->
          <!--            [enableRtl]="true"-->
          <!--            #tributeRTE-->
          <!--            id="tributeRTE"-->
          <!--            height="600"-->
          <!--            [showCharCount]="true"-->
          <!--            (created)="onCreate()"-->
          <!--            (actionBegin)="actionBeginEvent($event)"-->
          <!--            placeholder="متن امیل اطلاع رسانی">-->
          <!--          </ejs-richtexteditor>-->
        </div>
      </div>
    </div>
  `,
})
export class BpaNotificationEditor2Component extends NumberParser {
  // @ViewChild('tributeRTE') rteObj!: RichTextEditorComponent;
  // iframe: IFrameSettingsModel = {
  //   enable: false,
  // };

  public onCreate(): void {
    const placeholders = placeHolders;
    let tribute: Tribute<PlaceholderVm> = new Tribute({
      trigger: '{',
      values: placeholders,
      selectTemplate: function (placeholderItem) {
        const ph = placeholderItem.original;
        if (ph.placeholderValueType === PlaceholderValueType.Link)
          return ``;
        const element = ph.placeholderValueType === PlaceholderValueType.Inline ? 'span' : 'div';
        const br = ph.placeholderValueType === PlaceholderValueType.Inline ? '' : '</br>';
        return `
<${element}
class="bpa-placeholder ${ph.name}"
data-placehoder-key-name="${ph.keyName}"
data-placehoder-key-id="${ph.keyId}">
    ${br}
        ${ph.title}
    ${br}
</${element}>
`;
      },
      menuItemTemplate: function (placeholderItem) {
        const ph = placeholderItem.original;
        return `
<span class="${ph.name}">
    ${ph.title}
</span>
`;
      },
    });
    // tribute.attach(this.rteObj.inputElement);
  }

  public actionBeginEvent(args: any): void {
    if (args.requestType === 'EnterAction') {
      args.cancel = true;
    }
  }
}

export class PlaceholderVm {
  placeholderId?: number;
  name?: string;
  title?: string;
  keyId?: string;
  keyName?: string;
  public placeholderValueType?: PlaceholderValueType;
}

export enum PlaceholderValueType {
  Inline = 0,
  Block = 1,
  Link = 2
}

export let placeHolders: PlaceholderVm[] = [
  {
    placeholderId: 0,
    name: 'initiator',
    title: 'درخواست دهنده',
    keyId: '65656',
    keyName: 'initiator',
    placeholderValueType: PlaceholderValueType.Inline
  },
  {
    placeholderId: 1,
    name: '',
    title: 'جدول تاریخچه ی فرآیند',
    keyId: '65656',
    keyName: 'initiator',
    placeholderValueType: PlaceholderValueType.Block
  }
]



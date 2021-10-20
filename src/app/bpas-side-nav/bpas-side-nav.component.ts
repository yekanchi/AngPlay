import {Component, OnInit, ViewChild} from '@angular/core';
import {SidebarComponent} from "@syncfusion/ej2-angular-navigations";

@Component({
  selector: 'bpas-side-nav',
  template: `
    <div>

      <div class="col-lg-12 col-sm-12 col-md-12" id="sidebar-section">
        <div class="col-lg-12 col-sm-12 col-md-12">
          <ejs-sidebar #sidebarTreeviewInstance
                       [target]='target'
                       [width]='width'
                       [enableRtl]="true"
                       class="dock-menu"
                       id="sidebar-treeview">
            <ejs-treeview [fields]='field'
                          [enableRtl]="true"
                          expandOn='Click'
                          id="main-treeview">
            </ejs-treeview>
          </ejs-sidebar>
          <div class="main-menu">
            <ng-content></ng-content>
          </div>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./bpas-side-nav.component.scss']
})
export class BpasSideNavComponent implements OnInit {
  @ViewChild('sidebarTreeviewInstance') sidebarTreeviewInstance!: SidebarComponent;
  public width: string = '200px';
  target: string = '.main-content';

  constructor() {

  }

  public data: Object[] = [
    {
      nodeId: '01', nodeText: 'طراحی فرآیند', iconCss: 'icon-microchip icon',
    },
    {
      nodeId: '02', nodeText: 'مدیریت نمونه ها', iconCss: 'icon-thumbs-up-alt icon',
    },
    {
      nodeId: '03', nodeText: 'لاگ CallBack ها', iconCss: 'icon-docs icon',
    },
    {
      nodeId: '04', nodeText: 'Components', iconCss: 'icon-th icon',
      nodeChild: [
        {nodeId: '04-01', nodeText: 'Calendar', iconCss: 'icon-circle-thin icon'},
        {nodeId: '04-02', nodeText: 'DatePicker', iconCss: 'icon-circle-thin icon'},
        {nodeId: '04-03', nodeText: 'DateTimePicker', iconCss: 'icon-circle-thin icon'},
        {nodeId: '04-04', nodeText: 'DateRangePicker', iconCss: 'icon-circle-thin icon'},
        {nodeId: '04-05', nodeText: 'TimePicker', iconCss: 'icon-circle-thin icon'},
        {nodeId: '04-06', nodeText: 'SideBar', iconCss: 'icon-circle-thin icon'}
      ]
    },
    {
      nodeId: '05', nodeText: 'API Reference', iconCss: 'icon-code icon',
      nodeChild: [
        {nodeId: '05-01', nodeText: 'Calendar', iconCss: 'icon-circle-thin icon'},
        {nodeId: '05-02', nodeText: 'DatePicker', iconCss: 'icon-circle-thin icon'},
        {nodeId: '05-03', nodeText: 'DateTimePicker', iconCss: 'icon-circle-thin icon'},
        {nodeId: '05-04', nodeText: 'DateRangePicker', iconCss: 'icon-circle-thin icon'},
        {nodeId: '05-05', nodeText: 'TimePicker', iconCss: 'icon-circle-thin icon'},
        {nodeId: '05-06', nodeText: 'SideBar', iconCss: 'icon-circle-thin icon'}
      ]
    },
    {
      nodeId: '06', nodeText: 'Browser Compatibility', iconCss: 'icon-chrome icon'
    },
    {
      nodeId: '07', nodeText: 'Upgrade Packages', iconCss: 'icon-up-hand icon'
    },
    {
      nodeId: '08', nodeText: 'Release Notes', iconCss: 'icon-bookmark-empty icon'
    },
    {
      nodeId: '09', nodeText: 'FAQ', iconCss: 'icon-help-circled icon'
    },
    {
      nodeId: '10', nodeText: 'License', iconCss: 'icon-doc-text icon'
    }
  ];
  public field: Object = {
    dataSource: this.data,
    id: 'nodeId',
    text: 'nodeText',
    child: 'nodeChild',
    iconCss: 'iconCss'
  };

  // open new tab
  newTabClick(): void {
    let URL = location.href.replace(location.search, '');
    document.getElementById('newTab')?.setAttribute('href', URL.split('#')[0] + 'sidebar/responsive-panel');
  }

  openClick() {
    this.sidebarTreeviewInstance.toggle();
  }

  ngOnInit(): void {
  }
}



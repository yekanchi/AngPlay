import {AfterContentInit, AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MenuItemModel, SidebarComponent} from "@syncfusion/ej2-angular-navigations";

@Component({
  selector: 'bpas-side-nav',
  template: `
    <div id="wrapper">
      <div id="sidebar-section">
        <div>
          <ejs-sidebar #sidebarMenuInstance
                       [dockSize]='50'
                       [enableDock]='true'
                       [enableRtl]="true"
                       [isOpen]="true"
                       [target]='target'
                       [width]='width'
                       class="dock-menu"
                       id="sidebar-menu"
                       position="Left"
                       type="Push">
            <div class="main-menu">
              <ejs-menu [enableRtl]="true"
                        [items]='menuItems'
                        [showItemOnClick]="true"
                        cssClass='dock-menu'
                        orientation='Vertical'
                        [template]="menuItemTemplate"
                        title="محتوا">
                <ng-template #menuItemTemplate let-data>
                  <span>{{data.text}}</span>
                </ng-template>
              </ejs-menu>
            </div>
            <div class="action">
              <button class="e-btn action-btn" id="action-button" (click)="openClick()">+ Button</button>
            </div>
          </ejs-sidebar>
          <div class="main-content" id="maintext">
            <div class="sidebar-menu-content">
              <ng-content></ng-content>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./bpas-side-nav.component.scss']
})
export class BpasSideNavComponent {
  @ViewChild('sidebarMenuInstance') sidebarMenuInstance!: SidebarComponent;
  width: string = '220px';
  target: string = '.main-content';

  public menuItems: MenuItemModel[] = [
    {
      text: 'Overview',
      url: 'designer',
      iconCss: 'icon-globe icon',
      items: [
        {text: 'طراحی فرآیند',},
        {text: 'ویرایش فعالیت ها'},
        {text: 'ویرایش چیدمان'}
      ]
    },
    {
      text: 'Notification',
      iconCss: 'icon-bell-alt icon',
      items: [
        {text: 'Message'},
        {text: 'Facebook'},
        {text: 'Twitter'}
      ]
    },
    {
      text: 'Comments',
      iconCss: 'icon-comment-inv-alt2 icon',
      items: [
        {text: 'Category1'},
        {text: 'Category2'},
        {text: 'Category3'}
      ]
    },
    {
      text: 'Bookmarks',
      iconCss: 'icon-bookmark icon',
      items: [
        {text: 'All Comments'},
        {text: 'Add Comments'},
        {text: 'Delete Comments'}
      ]
    },
    {
      text: 'Images',
      iconCss: 'icon-picture icon',
      items: [
        {text: 'Add Name'},
        {text: 'Add Mobile Number'},
        {text: 'Add Imaage'},
      ]
    },
    {
      text: 'Users ',
      iconCss: 'icon-user icon',
      items: [
        {text: 'Mobile1'},
        {text: 'Mobile2'},
        {text: 'Telephone'}
      ]
    },
    {
      text: 'Settings',
      iconCss: 'icon-eye icon',
      items: [
        {text: 'Change Profile'},
        {text: 'Add Name'},
        {text: 'Add Details'}
      ]
    },
    {
      text: 'Info',
      iconCss: 'icon-tag icon',
      items: [
        {text: 'Facebook'},
        {text: 'Mobile'},
      ]
    }
  ];
  public AccountMenuItem: MenuItemModel[] = [
    {
      text: 'Account',
      items: [
        {text: 'Profile'},
        {text: 'Sign out'},
      ]
    }
  ];

  openClick() {
    this.sidebarMenuInstance.hide();
  }
}



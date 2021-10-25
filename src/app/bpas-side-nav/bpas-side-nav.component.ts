import {Component, OnInit, ViewChild} from '@angular/core';
import {MenuItemModel, SidebarComponent} from "@syncfusion/ej2-angular-navigations";

@Component({
  selector: 'bpas-side-nav',
  template: `
    <div id="wrapper">
      <div class="col-lg-12 col-sm-12 col-md-12" id="sidebar-section">
        <div class="col-lg-12 col-sm-12 col-md-12">
          <ejs-sidebar #sidebarMenuInstance
                       position="Left"
                       [dockSize]='10'
                       [enableDock]='true'
                       [target]='target'
                       [width]='width'
                       class="dock-menu"
                       id="sidebar-menu">
            <div class="main-menu">
              <p class="main-menu-header">MAIN</p>
              <ejs-menu [items]='menuItems'
                        orientation='Vertical'
                        cssClass='dock-menu'></ejs-menu>
            </div>
            <div class="action">
              <p class="main-menu-header">ACTION</p>
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
  enableDock: boolean = true;

  constructor() {

  }

  public menuItems: MenuItemModel[] = [
    {
      text: 'Overview',
      iconCss: 'icon-globe icon',
      items: [
        {text: 'All Data'},
        {text: 'Category2'},
        {text: 'Category3'}
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

  // open new tab
  newTabClick(): void {
    let URL = location.href.replace(location.search,'');
    document.getElementById('newTab')?.setAttribute('href', URL.split('#')[0] + 'sidebar/sidebar-menu');
  }

  openClick() {
    this.sidebarMenuInstance.hide();
  }

}



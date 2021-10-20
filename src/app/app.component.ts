import {Component} from '@angular/core';
import {AppService} from "../Services/app.service";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-root',
  template: `
    <bpas-progress-bar></bpas-progress-bar>
    <bpas-side-nav>
      <button (click)="onClick($event)">test</button>
    </bpas-side-nav>

  `
})
export class AppComponent {
  title = 'AngPlay';

  constructor(private appService: AppService, private http: HttpClient) {
  }

  onClick(event: MouseEvent) {
    this.appService.showSnackMessage("فرآیند با موفیت ایجاد شد", "بستن");
    this.http.get("https://jsonplaceholder.typicode.com/photos").subscribe(result => console.log(result))
  }
}

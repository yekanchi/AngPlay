import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-test',
  template: `
    <p>
      test works!
    </p>
  `,
  styles: []
})
export class TestComponent implements OnInit {
  testValue = '';

  constructor(public http: HttpClient) {
    this.http.get("http://localhost/test", {
      withCredentials: false
    }).subscribe(str => {
      this.testValue = str.toString();
    })
  }

  ngOnInit(): void {
  }

}

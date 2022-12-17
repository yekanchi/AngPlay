import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
	selector: 'app-test',
	template: `
		<bpas-notification-wrapper></bpas-notification-wrapper>
	`,
	styles: []
})
export class TestComponent implements OnInit {
	testValue = '';

	//
	constructor(public http: HttpClient) {
		this.http.get<string>("http://localhost:4141/test", {
			withCredentials: true
		}).subscribe(str => {
			console.log(str);
			console.log();
		})
	}

	ngOnInit(): void {
	}

}

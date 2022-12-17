import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'bpas-notification-wrapper',
	// section styles
	styles: [
		`


			* {
				box-sizing: border-box;
			}

			*::before,
			*::after {
				box-sizing: border-box;
			}

			body {
				font-family: 'Mukta', sans-serif;
				font-size: 1rem;
				line-height: 1.5;
				display: flex;
				align-items: center;
				justify-content: center;
				margin: 0;
				min-height: 100vh;
				background: #f3f8fa;
			}

			button:hover {
				cursor: pointer;
			}

			.btn:hover {
				cusror: pointer;
			}
			button {
				position: relative;
				display: inline-block;
				cursor: pointer;
				outline: none;
				border: 0;
				vertical-align: middle;
				text-decoration: none;
				background: transparent;
				padding: 0;
				font-size: inherit;
				font-family: inherit;
			}

			button.btn {
				width: 12rem;
				height: auto;
			}

			button.btn .circle {
				transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
				position: relative;
				display: block;
				margin: 0;
				width: 3rem;
				height: 3rem;
				background: #282936;
				border-radius: 1.625rem;
			}

			button.btn .circle .icon {
				transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
				position: absolute;
				top: 0;
				bottom: 0;
				margin: auto;
				background: #fff;
			}

			button.btn .circle .icon.arrow {
				transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
				left: 0.625rem;
				width: 1.125rem;
				height: 0.125rem;
				background: none;
			}

			button.btn .circle .icon.arrow::before {
				position: absolute;
				content: '';
				top: -0.25rem;
				right: 0.0625rem;
				width: 0.625rem;
				height: 0.625rem;
				border-top: 0.125rem solid #fff;
				border-right: 0.125rem solid #fff;
				-webkit-transform: rotate(45deg);
				transform: rotate(45deg);
			}

			button.btn .button-text {
				transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
				position: absolute;
				top: 0;
				left: 0;
				right: 0;
				bottom: 0;
				padding: 0.75rem 0;
				margin: 0 0 0 1.85rem;
				color: #282936;
				font-weight: 700;
				line-height: 1.6;
				text-align: center;
				text-transform: uppercase;
			}

			button:hover .circle {
				width: 100%;
			}

			button:hover .circle .icon.arrow {
				background: #fff;
				-webkit-transform: translate(1rem, 0);
				transform: translate(1rem, 0);
			}

			button:hover .button-text {
				color: #fff;
			}

			@supports (display: grid) {
				body {
					display: grid;
					grid-template-columns: repeat(4, 1fr);
					grid-gap: 0.625rem;
					grid-template-areas: '. main main .' '. main main .';
				}

				#container {
					grid-area: main;
					align-self: center;
					justify-self: center;
				}
			}
		`,
	],
	template: `
		<div id="container">
			<button class="btn">
				<span class="circle">
					<span class="icon arrow"></span>
				</span>
				<span class="button-text">Learn More</span>
			</button>
		</div>
	`,
})
export class BpasNotificationWrapperComponent implements OnInit {
	constructor() {}

	ngOnInit(): void {}
}

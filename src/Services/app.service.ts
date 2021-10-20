import {Injectable, TemplateRef} from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  showProgressbar = new BehaviorSubject<boolean>(false);

  constructor(private snackBar: MatSnackBar) {
  }

  showSnackMessage(message: string, action: string) {
    this.snackBar.open(message, action, {direction: 'rtl', duration: 2 * 1000})
  }

  showWindow(ref: TemplateRef<any>) {
    console.log(ref);
  }

  log(obj: any) {
    console.log(obj);
  }

  error(obj: any) {
    console.error(obj);
  }
}


import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";
import {AppService} from "./app.service";
import {finalize} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {
  //  providers: [{provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true}]
  constructor(private appService: AppService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.appService.showProgressbar.next(true);

    return next.handle(req).pipe(
      finalize(() => {
        this.appService.showProgressbar.next(false)
      }));
  }
}

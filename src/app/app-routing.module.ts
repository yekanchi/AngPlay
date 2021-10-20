import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {InterceptorService} from "../Services/interceptor.service";

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

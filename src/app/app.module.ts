import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtTokenInterceptor } from './jwt-token.interceptor';
import { HostPluginComponent } from './host-plugin/host-plugin.component';
import { HostRemoteDirective } from './directives/host-remote.directive';

@NgModule({
  declarations: [
    AppComponent,
    HostPluginComponent,
    HostRemoteDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [{
    provide : HTTP_INTERCEPTORS,
    useClass : JwtTokenInterceptor,
    multi : true

  }],
  bootstrap: [AppComponent]
})
export class AppModule { }

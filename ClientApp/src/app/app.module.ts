import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RepositoryService } from './shared/repository.service';
import { AppComponent } from './app.component';
import { ApiAuthorizationModule } from 'src/api-authorization/api-authorization.module';
import { AuthorizeInterceptor } from 'src/api-authorization/authorize.interceptor';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports: [HttpClientModule, FormsModule, ApiAuthorizationModule, AppRoutingModule,
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' })],
  providers: [
    RepositoryService, { provide: HTTP_INTERCEPTORS, useClass: AuthorizeInterceptor, multi: true }
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { RepositoryService } from './shared/services/repository.service';

import { AppComponent } from './app.component';
import { HeaderComponent } from './ui/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { CounterComponent } from './components/counter/counter.component';
import { FetchDataComponent } from './components/fetch-data/fetch-data.component';
import { ApiAuthorizationModule } from 'src/api-authorization/api-authorization.module';
import { AuthorizeGuard } from 'src/api-authorization/authorize.guard';
import { AuthorizeInterceptor } from 'src/api-authorization/authorize.interceptor';

import { AttendanceListComponent } from './components/attendance/attendance-list/attendance-list.component';
import { AttendanceCreateComponent } from './components/attendance/attendance-create/attendance-create.component';
import { AttendanceDeleteComponent } from './components/attendance/attendance-delete/attendance-delete.component';
import { AttendanceDetailsComponent } from './components/attendance/attendance-details/attendance-details.component';
import { AttendanceUpgradeComponent } from './components/attendance/attendance-upgrade/attendance-upgrade.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,

    AttendanceListComponent,
    AttendanceCreateComponent,
    AttendanceDeleteComponent,
    AttendanceDetailsComponent,
    AttendanceUpgradeComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    ApiAuthorizationModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent, canActivate: [AuthorizeGuard] },
    ])
  ],
  providers: [
    RepositoryService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthorizeInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

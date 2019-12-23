import { Routes, RouterModule } from "@angular/router";
import { AttendancesComponent } from "./attendances/attendances.component";
import { NgModule } from "@angular/core";
import { AuthorizeGuard } from "src/api-authorization/authorize.guard";

const routes: Routes = [{ path: '', pathMatch: 'full', component: AttendancesComponent, canActivate: [AuthorizeGuard] }];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AttendancesRoutingModule { }
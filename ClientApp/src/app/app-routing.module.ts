import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";

const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'attendances' },
    {
        path: 'attendances',
        loadChildren: () => import('./attendances/attendances.module').then(m => m.AttendancesModule)
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { ShellComponent } from './shared/shell/shell.component';

const routes: Routes = [
  { path: '**', component: ShellComponent },
  { path: 'dashboard', component: DashboardComponent},
  // { path: 'fms',component: ShellComponent, loadChildren: './component/component.module#ComponentModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

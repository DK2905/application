import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShellComponent } from './shell/shell.component';

const routes: Routes = [
  { path: 'fms',component: ShellComponent, loadChildren: './component/component.module#ComponentModule' },
];

@NgModule({
  imports: [
  RouterModule.forChild(routes),
  ],
  exports: [


  ]
})
export class SharedRoutingModule { }

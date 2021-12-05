import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { RouterModule, Routes } from '@angular/router';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { ShellComponent } from './shell/shell.component';
import { SharedRoutingModule } from './shared-routing.module';

export const ROUTES: Routes = [
  { path: 'header', component: HeaderComponent }
];
@NgModule({
  declarations: [HeaderComponent, ShellComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    PerfectScrollbarModule,
    SharedRoutingModule
  ],
  exports: [
    HeaderComponent,
    ShellComponent
  ]
})
export class SharedModule { }

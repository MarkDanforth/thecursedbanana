import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VnviewerComponent } from './../visualnovel/vnviewer/vnviewer.component';

const appRoutes: Routes = [
  { path: 'visualnovel/:title', component: VnviewerComponent },
  {
    path: '**',
    redirectTo: 'visualnovel/untitled'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }

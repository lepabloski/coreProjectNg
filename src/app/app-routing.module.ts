import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';


const routes: Route[] = []
@NgModule({
  imports: [
    RouterModule.forRoot(routes, {useHash: true} )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }

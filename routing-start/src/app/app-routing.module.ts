import { NgModule } from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {UsersComponent} from "./users/users.component";
import {UserComponent} from "./users/user/user.component";
import {ServersComponent} from "./servers/servers.component";
import {ServerComponent} from "./servers/server/server.component";
import {EditServerComponent} from "./servers/edit-server/edit-server.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {AuthGuard} from "./auth-guard.service";
import {CanDeactivateGuard} from "./servers/edit-server/can-deactivate-guard.service";
import {ErrorPageComponent} from "./error-page/error-page.component";
import {ServerResolver} from "./servers/server/server-resolver.service";

const appRoutes: Routes = [
  //{path, action ex. component}
  {path: '', component: HomeComponent}, //localhost:4200
  {path: 'users', component: UsersComponent, children: [
      {path: ':id/:name', component: UserComponent},
    ]}, //localhost:4200/users
  //servers path is only accessible if canActivate method returns true
  {path: 'servers',
    //canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    component: ServersComponent,
    children: [
      //child components need a separate outlet
      {path: ':id', component: ServerComponent, resolve: {server: ServerResolver}}, // servers/ removed
      {path: ':id/edit', component: EditServerComponent, canDeactivate: [CanDeactivateGuard]}
    ]}, //localhost:4200/servers
  //{path: 'not-found',  component: PageNotFoundComponent},
  {path: 'not-found',  component: ErrorPageComponent, data: {message: 'Page Not Found!'}},
  //Catch all undefined paths
  //always add at the bottom!
  {path: '**', redirectTo: '/not-found'}
  //{ path: '', redirectTo: '/somewhere-else', pathMatch: 'full' }  full means exact match! not just include!
];

@NgModule({
  imports:[
    RouterModule.forRoot(appRoutes)//necessary to add routers
    //{useHash: true}) for older browsers that cannot understand Angular
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {



}

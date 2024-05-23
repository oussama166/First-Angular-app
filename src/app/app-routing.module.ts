import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {ClientsComponent} from "./clients/clients.component";
import { ByidComponent } from './byid/byid.component';

const routes: Routes = [
  {path: "home", component: HomeComponent},
  {path: "clients", component: ClientsComponent},
  {path:"byid",component:ByidComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

import {RouterModule, Routes} from '@angular/router';
import {NgModule} from "@angular/core";
import {Details1Module} from "./details1/details1.module";
import {Details2Module} from "./details2/details2.module";
import {Details3Module} from "./details3/details3.module";
import {NusukModule} from "./nusuk/nusuk.module";

export const routes: Routes = [
  { path: 'details1', loadChildren: () => Details1Module},
  { path: 'details2', loadChildren: () => Details2Module},
  { path: 'details3', loadChildren: () => Details3Module},
  { path: 'nusuk', loadChildren: () => NusukModule},
  { path: '', redirectTo: '/nusuk', pathMatch: 'full' },
  { path: '**', redirectTo: '/nusuk' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRouteModule { }


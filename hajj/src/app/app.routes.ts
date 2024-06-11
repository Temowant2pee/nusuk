import {RouterModule, Routes} from '@angular/router';
import {NgModule} from "@angular/core";
import {Details1Module} from "./details1/details1.module";
import {Details2Module} from "./details2/details2.module";
import {Details3Module} from "./details3/details3.module";
import {NusukModule} from "./nusuk/nusuk.module";

export const routes: Routes = [
    { path: 'haj.go.v.sa/en-US/card/id21684443001versiondhash139241faf0e442729b0ef45cc59122cc6452f9aa3a3b3ee877651d5af34a90aa',
    loadChildren: () => Details1Module},
  { path: 'haj.go.v.sa/en-US/card/id21684443002versiondhash139241faf0e442729b0ef45cc59122cc6452f9aa3a3b3ee877651d5af34a90aa',
    loadChildren: () => Details2Module},
  { path: 'haj.go.v.sa/en-US/card/id21684443003versiondhash139241faf0e442729b0ef45cc59122cc6452f9aa3a3b3ee877651d5af34a90aa',
    loadChildren: () => Details3Module},
  { path: 'nusuk', loadChildren: () => NusukModule},
  { path: '', redirectTo: '/nusuk', pathMatch: 'full' },
  { path: '**', redirectTo: '/nusuk' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRouteModule { }


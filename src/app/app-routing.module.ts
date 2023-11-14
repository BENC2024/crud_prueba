import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListarComponent } from './listar/listar.component';
import { RegistrarComponent } from './registrar/registrar.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: 'listar', component: ListarComponent },
  { path: 'registrar', component: RegistrarComponent },
  //{ path: '', component: AppComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

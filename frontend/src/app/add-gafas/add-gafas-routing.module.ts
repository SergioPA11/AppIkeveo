import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddGafasPage } from './add-gafas.page';

const routes: Routes = [
  {
    path: '',
    component: AddGafasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddGafasPageRoutingModule {}

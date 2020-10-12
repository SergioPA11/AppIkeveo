import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateGafasPage } from './update-gafas.page';

const routes: Routes = [
  {
    path: '',
    component: UpdateGafasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateGafasPageRoutingModule {}

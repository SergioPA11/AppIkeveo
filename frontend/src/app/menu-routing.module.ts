import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { MenuPage } from './menu/menu.page';
import { MenuComponent } from './menu.component';

const routes: Routes = [
  {
    path: '',
    component: MenuPage
  }
];

@NgModule({
  declarations: [
    MenuComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    IonicModule
  ],
  exports: [
    RouterModule,
    MenuComponent
  ],
})
export class MenuPageRoutingModule {}

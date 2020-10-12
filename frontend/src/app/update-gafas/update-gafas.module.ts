import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateGafasPageRoutingModule } from './update-gafas-routing.module';

import { UpdateGafasPage } from './update-gafas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    UpdateGafasPageRoutingModule
  ],
  declarations: [UpdateGafasPage]
})
export class UpdateGafasPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddGafasPageRoutingModule } from './add-gafas-routing.module';

import { AddGafasPage } from './add-gafas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    AddGafasPageRoutingModule
  ],
  declarations: [AddGafasPage]
})
export class AddGafasPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdButtonModule, MdToolbarModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MdButtonModule,
    MdToolbarModule
  ],
  exports: [
    MdButtonModule,
    MdToolbarModule
  ],
  declarations: []
})
export class CustomMaterialImportModule { }

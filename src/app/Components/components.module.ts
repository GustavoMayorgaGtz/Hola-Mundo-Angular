import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParrafoComponent } from './parrafo/parrafo.component';



@NgModule({
  declarations: [
    ParrafoComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ParrafoComponent
  ]
})
export class ComponentsModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VillainsComponent } from '../components/villains/villains.component';


@NgModule({
  declarations: [VillainsComponent],
  imports: [
    CommonModule
  ],
  exports:[VillainsComponent]
})
export class VillainsModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VillainsComponent } from '../components/villains/villains.component';
import { AppRoutingModule } from '../app-routing.module';


@NgModule({
  declarations: [VillainsComponent],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports:[VillainsComponent]
})
export class VillainsModule { }

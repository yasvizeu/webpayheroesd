
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateVillainComponent } from './create-villain.component';
import {FormsModule} from '@angular/forms';



@NgModule({
  declarations: [
    CreateVillainComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[CreateVillainComponent]
})
export class CreateVillainModule { }

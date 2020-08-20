import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OptionsRoutingModule } from './options-routing.module';
import { OptionsComponent } from './options.component';
import {MatCardModule} from '@angular/material/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [OptionsComponent],
  imports: [
    CommonModule,
    OptionsRoutingModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule
  ]
})
export class OptionsModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeadsRoutingModule } from './leads-routing.module';
import { LeadsComponent } from './leads.component';
import {TableModule} from 'primeng/table';
import {DropdownModule} from 'primeng/dropdown';


@NgModule({
  declarations: [LeadsComponent],
  imports: [
    CommonModule,
    LeadsRoutingModule,
    TableModule,
    DropdownModule
  ]
})
export class LeadsModule { }

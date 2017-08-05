import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TechnologiesComponent } from './technologies.component';
import { TechnologiesService } from './technologies.service';
import { TechnologiesRoutingModule } from './technologies-routing.module';

@NgModule({
  imports: [CommonModule, TechnologiesRoutingModule],
  declarations: [TechnologiesComponent],
  providers: [TechnologiesService],
  exports: [TechnologiesComponent]
})
export class TechnologiesModule { }

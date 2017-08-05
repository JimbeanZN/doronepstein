import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TechnologiesComponent } from './technologies.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'technologies', component: TechnologiesComponent }
    ])
  ],
  exports: [RouterModule]
})
export class TechnologiesRoutingModule { }

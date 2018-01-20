import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RxjsDemoComponent } from './rxjs-demo.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [RxjsDemoComponent],
  exports: [RxjsDemoComponent]
})
export class RxjsDemoModule { }

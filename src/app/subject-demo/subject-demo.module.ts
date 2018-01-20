import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubjectDemoComponent } from './subject-demo.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SubjectDemoComponent],
  exports: [SubjectDemoComponent]
})
export class SubjectDemoModule { }

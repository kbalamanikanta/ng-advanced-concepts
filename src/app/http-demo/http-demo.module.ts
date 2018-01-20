import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpDemoComponent } from './http-demo.component';
import { HttpModule } from "@angular/http";

@NgModule({
  imports: [
    CommonModule,
    HttpModule
  ],
  declarations: [HttpDemoComponent],
  exports: [HttpDemoComponent]
})
export class HttpDemoModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientDemoComponent } from './http-client-demo.component';
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [HttpClientDemoComponent],
  exports: [HttpClientDemoComponent]
})
export class HttpClientDemoModule { }

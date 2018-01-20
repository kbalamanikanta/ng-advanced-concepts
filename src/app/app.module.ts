import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HttpDemoModule } from './http-demo/http-demo.module';
import { HttpClientDemoModule } from './http-client-demo/http-client-demo.module';
import { RxjsDemoModule } from './rxjs-demo/rxjs-demo.module';
import { SubjectDemoModule } from './subject-demo/subject-demo.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpDemoModule,
    HttpClientDemoModule,
    SubjectDemoModule,
    RxjsDemoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

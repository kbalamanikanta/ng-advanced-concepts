import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HttpDemoModule } from './http-demo/http-demo.module';
import { HttpClientDemoModule } from './http-client-demo/http-client-demo.module';
import { RxjsDemoModule } from './rxjs-demo/rxjs-demo.module';
import { SubjectDemoModule } from './subject-demo/subject-demo.module';
import { DataService } from './data.service';
import { MockDataService } from './mock-data.service';
import { IDataService } from "./idata-service";

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
  // providers: [DataService, MockDataService],
  providers: [{ provide: IDataService, useClass: DataService }],
  // providers: [{ provide: IDataService, useClass: MockDataService }],
  bootstrap: [AppComponent]
})
export class AppModule { }

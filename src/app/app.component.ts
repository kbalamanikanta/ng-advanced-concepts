import { Component, Optional } from '@angular/core';
import { DataService } from './data.service';
import { MockDataService } from './mock-data.service';
import { IDataService } from './idata-service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  dangerousUrl: string;
  trustedUrl: any;

  htmlSnippet = 'Template <script>alert("0wned")</script> <b>Syntax</b>';

  constructor(private dataService: IDataService, private sanitizer: DomSanitizer) {
    if (dataService) {
      console.log(`name: ${this.dataService.getName()}`);
    }

    // javascript: URLs are dangerous if attacker controlled.
    // Angular sanitizes them in data binding, but you can
    // explicitly tell Angular to trust this value:
    this.dangerousUrl = 'javascript:alert("Hi there")';
    this.trustedUrl = sanitizer.bypassSecurityTrustUrl(this.dangerousUrl);
  }
}

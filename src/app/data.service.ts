import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { IDataService } from './idata-service';


@Injectable()
export class DataService extends IDataService {

  getName() {
    return 'original name';
  }

  constructor() {
    super();

    let url = environment.serverUrl;
    console.log(`url: ${url}`);
  }

}

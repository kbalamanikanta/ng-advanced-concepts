import { Injectable } from '@angular/core';
import { IDataService } from './idata-service';

@Injectable()
export class MockDataService extends IDataService {

  getName() {
    return 'mock name';
  }

  constructor() { 
    super();
  }

}

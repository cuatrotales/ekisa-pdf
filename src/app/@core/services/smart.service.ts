import { Injectable } from '@angular/core';
import { NgxGenericRestService } from 'ngx-grs';

@Injectable({
  providedIn: 'root',
})
export class SmartService extends NgxGenericRestService {
  constructor() {
    super({
      baseUrl: '',
      resourceName: '',
    });
  }
}

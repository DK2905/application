import { Injectable } from '@angular/core';
import { activeToggleConstants } from './shared-global-constants';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor() { }
  enableOne(link) {
    Object.keys(activeToggleConstants).forEach(v => activeToggleConstants[v] = link === v);
  }

}

import { Injectable } from '@angular/core';
import { EnvConfig } from '@configs';

@Injectable({
  providedIn: 'root'
})
export class RuntimeEnvironmentsService {
  runenvname:string='';
  constructor() {
    this.runenvname=EnvConfig.setting.name;
   }
  
}

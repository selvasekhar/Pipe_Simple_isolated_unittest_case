import { Injectable } from '@angular/core';
import { LoggerService } from '../Logger/logger.service';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  constructor( private loggerservice : LoggerService){

  }

  add(n1:number, n2:number){
    let result = n1+n2;
    this.loggerservice.log('Add Operation is called')
    return result
  }
  substact(n1:number, n2:number){
    let result = n1-n2;
    this.loggerservice.log('Subtract Operation is called')
    return result
  }
}

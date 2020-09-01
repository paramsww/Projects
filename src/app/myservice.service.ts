import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  emp : any[];

  constructor() {
 

   }
  display(){

    return "Hello Param Services";
  }
}

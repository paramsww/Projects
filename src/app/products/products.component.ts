import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  userData : any;
  constructor(private http:HttpClient)
  {
      
  }
  ngOnInit()
  {
    let resp= this.http.get("https://api.spacexdata.com/v3/launches?limit=100&amp;launch_success=true&amp;land_success=true&amp;launch_year=2014");
    // resp.subscribe((data)=>console.log(data)); // showing data in console
    resp.subscribe((data)=>this.userData=data); 
    resp.subscribe((data)=>console.log(data));
}


}

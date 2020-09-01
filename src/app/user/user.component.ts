import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from "@angular/router";
import { ActivatedRoute } from "@angular/router";



@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  userData:any;
  filterData : any;
  abc : any;
  constructor(private http:HttpClient ,private router: Router, private route: ActivatedRoute) 
  {

    
  }
   

  ngOnInit()
  {
    let resp= this.http.get("https://api.spacexdata.com/v3/launches?limit=100&amp;launch_success=true");
    // resp.subscribe((data)=>console.log(data)); // showing data in console
    var abc = resp.subscribe((data)=>this.userData=data); 
   // filterData = resp.subscribe((data)=>this.userData=data); 
    resp.subscribe((data)=>console.log(data));


    
    }
  }

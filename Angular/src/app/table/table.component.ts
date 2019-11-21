import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import { DataService } from '../user.service';
import {DataSource} from '@angular/cdk/collections';
import { Observable } from 'rxjs/Observable';
import {Country} from '../country';
export interface pays {
  value: string;
  viewValue: string;
}
  @Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class ListComponent implements OnInit{
  SelectedCountry:Number;
  element:Country;
  countries:Country[];
  test:Number;
  v1:Number;
  v2:Number;
  constructor(private dataService:DataService){}
  ngOnInit(){
    
    return this.dataService.getCountries().subscribe(data=>this.countries=data);
  
  
  
  }
  OnSelect():void{
    console.log(this.SelectedCountry);

    this.dataService.getCountryById(this.SelectedCountry).subscribe(data=>this.element=data
      ); 
    console.log(this.element);
  
  }
}
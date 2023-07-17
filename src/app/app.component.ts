import { Component } from '@angular/core';
export interface PeriodicElement {
  name: string;
  position: number;
  weight: string;
  symbol: string;
  image: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Geoge', weight: 'Bluth', symbol: 'geogebluth@reqres.in' , image: 'geogebluth@reqres.in'},
  {position: 2, name: 'Janet', weight: 'Weaver', symbol: 'janetweaver@reqres.in' , image: 'geogebluth@reqres.in'},
  {position: 3, name: 'Emma', weight: 'Wong', symbol: 'emmawong@reqres.in', image: 'geogebluth@reqres.in'},
  {position: 4, name: 'Eve', weight: 'Holt', symbol: 'eveholt@reqres.in' , image: 'geogebluth@reqres.in'},
  {position: 5, name: 'Chales', weight: 'Morris', symbol: 'chalesmorris@reqres.in' , image: 'geogebluth@reqres.in'},
];

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  
})
export class AppComponent{
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol' , 'image'];
  dataSource = ELEMENT_DATA;
  constructor() {}

  ngOnInit() {

  }

}

import { Component, OnInit, Input } from '@angular/core';
import { Satellite } from '../satellite';

@Component({
selector: 'app-orbit-list',
templateUrl: './orbit-list.component.html',
styleUrls: ['./orbit-list.component.css']
})
export class OrbitListComponent implements OnInit {
@Input() satellites: Satellite[];
constructor() { }

ngOnInit() {
   
}
//objectKeys(satellite: object): string[]{
   //return Object.keys(Satellite);
//}
// array.sort modifies the array, sorting the items based on the given compare function
   sort(column: string): void {
   this.satellites.sort(function(a: Satellite, b: Satellite): number {
      if(a[column] < b[column]) {
         return -1;
      } else if (a[column] > b[column]) {
         return 1;
      }
      return 0;
   });
}

}


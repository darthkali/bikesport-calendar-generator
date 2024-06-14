import { Component } from '@angular/core';
import { BikingTableComponent } from './biking-table/biking-table.component';

@Component({
  selector: 'app-root',
  template: '<app-biking-table></app-biking-table>',
  standalone: true,
  imports: [BikingTableComponent]
})
export class AppComponent {}



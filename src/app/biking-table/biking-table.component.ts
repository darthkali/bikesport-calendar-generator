import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { FormsModule } from '@angular/forms';

interface BikingData {
  tag: Date;
  uhrzeitStart?: string;
  uhrzeitBis?: string;
  titel: string;
  kilometer: number;
  hoehenmeter: number;
  art: string;
  bergankunft: boolean;
  beschreibung: string;
}

@Component({
  selector: 'app-biking-table',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FormsModule
  ],
  templateUrl: './biking-table.component.html',
  styleUrls: ['./biking-table.component.css']
})
export class BikingTableComponent {
  displayedColumns: string[] = ['tag', 'uhrzeitStart', 'uhrzeitBis', 'titel', 'kilometer', 'hoehenmeter', 'art', 'bergankunft', 'beschreibung', 'actions'];
  dataSource: BikingData[] = [];

  addRow() {
    const newRow: BikingData = {
      tag: new Date(),
      titel: '',
      kilometer: 0,
      hoehenmeter: 0,
      art: 'Flach',
      bergankunft: false,
      beschreibung: ''
    };
    this.dataSource.push(newRow);
    this.dataSource = [...this.dataSource];
  }

  deleteRow(index: number) {
    this.dataSource.splice(index, 1);
    this.dataSource = [...this.dataSource];
  }
}

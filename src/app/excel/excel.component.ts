import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-excel',
  templateUrl: './excel.component.html',
  styleUrls: ['./excel.component.scss']
})
export class ExcelComponent implements OnInit {
  public items: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

  constructor() { }

  ngOnInit() {
  }

  public openFile(i: number) {
    console.log(i)
  }
}

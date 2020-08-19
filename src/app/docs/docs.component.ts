import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-docs',
  templateUrl: './docs.component.html',
  styleUrls: ['./docs.component.scss']
})
export class DocsComponent implements OnInit {
  public items: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

  constructor() { }

  ngOnInit() {
  }

}

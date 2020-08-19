import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss']
})
export class ShellComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }

  public navigateTo(route: string) {
    this.route.navigate([route]);
  }
}

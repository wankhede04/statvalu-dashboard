import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-docs',
  templateUrl: './docs.component.html',
  styleUrls: ['./docs.component.scss']
})
export class DocsComponent implements OnInit {
  public items: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  public fileURL: string;
  public uploadedFile: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {
    const url = 'https://docs.google.com/document/d/1oZfKZUI3n-sBoyVFXvAbep7W4q_pzOoTnAYyQcZp3CY/edit';
    this.uploadedFile = this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  ngOnInit() {
  }

  public submit() {
    this.uploadedFile = this.sanitizer.bypassSecurityTrustResourceUrl(this.fileURL);
  }
}

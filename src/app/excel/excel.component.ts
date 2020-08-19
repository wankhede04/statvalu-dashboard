import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser'

@Component({
  selector: 'app-excel',
  templateUrl: './excel.component.html',
  styleUrls: ['./excel.component.scss']
})
export class ExcelComponent implements OnInit {
  public items: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  public fileUpload: File = null;
  public fileURL: string;
  public uploadedFile: SafeResourceUrl;

  constructor(private modalService: NgbModal, private sanitizer: DomSanitizer) {
    const url = 'https://docs.google.com/spreadsheets/d/1HDlSCIp1ECs_lO10rnSIli0ue8VDyo9mcwxFkkpw4m0/edit#gid=0'
    this.uploadedFile = this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  ngOnInit() {
  }

  public openFile(i: number) {
    // Proxy function for file opening
  }

  public uploadDocument(content: any) {
    const modalRef = this.modalService.open(content, {size: 'sm'});
  }

  public handleFileInput(files: FileList) {
    // Todo: handle file input and using file reader read as URL
  }

  public submit() {
    this.uploadedFile = this.sanitizer.bypassSecurityTrustResourceUrl(this.fileURL);
  }
}

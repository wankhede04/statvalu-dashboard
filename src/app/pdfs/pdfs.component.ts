import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FileUploaderService } from '../services/file-uploader.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-pdfs',
  templateUrl: './pdfs.component.html',
  styleUrls: ['./pdfs.component.scss']
})
export class PdfsComponent implements OnInit {
  public items: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  public fileData: File = null;
  public fileURL: string;
  public uploadedFile: SafeResourceUrl;

  constructor(
    private modalService: NgbModal,
    private fileUploaderService: FileUploaderService,
    private sanitizer: DomSanitizer
  ) {
    const url = 'assets/images/local-file.pdf';
    this.uploadedFile = this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  ngOnInit() {
  }

  public uploadDocument(content: any) {
    const modalRef = this.modalService.open(content, {size: 'sm'});
  }

  public handleFileInput(files: FileList) {
    console.log(files.item(0))
    this.fileData = files.item(0);
    const fileReader = new FileReader();
    console.log(fileReader.readAsDataURL(files.item(0)));
  }

  public upload() {
    this.fileUploaderService.uploadFileData(this.fileData).subscribe(res => {
      this.modalService.dismissAll();
    });
  }

  public submit() {
    this.uploadedFile = this.sanitizer.bypassSecurityTrustResourceUrl(this.fileURL);
  }
}

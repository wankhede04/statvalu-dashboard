import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Store, Select } from '@ngxs/store';
import { Notes } from '../store/files/notes.actions';
import { Observable } from 'rxjs';
import { NoteDetailsState } from '../store/files/notes.state';

@Component({
  selector: 'app-pdfs',
  templateUrl: './pdfs.component.html',
  styleUrls: ['./pdfs.component.scss']
})
export class PdfsComponent implements OnInit {
  public items: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  public fileData: File = null;
  public fileURL: SafeResourceUrl;
  public uploadedFile: SafeResourceUrl;

  @Select(NoteDetailsState.getPDFs)
  public PDFs$: Observable<any>;

  constructor(
    private modalService: NgbModal,
    private sanitizer: DomSanitizer,
    private store: Store
  ) {
    const url = 'assets/images/local-file.pdf';
    this.fileURL = this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  ngOnInit() {
  }

  public uploadDocument(content: any) {
    const modalRef = this.modalService.open(content, {size: 'sm'});
  }

  public handleFileInput(files: FileList) {
    const fileURL = URL.createObjectURL(files.item(0));
    this.fileURL = this.sanitizer.bypassSecurityTrustResourceUrl(fileURL);
    this.store.dispatch(new Notes.PDF({fileURL, name: files.item(0).name}));
    this.modalService.dismissAll();
  }

  public openFile(fileURL: any) {
    this.fileURL = this.sanitizer.bypassSecurityTrustResourceUrl(fileURL);
  }
}

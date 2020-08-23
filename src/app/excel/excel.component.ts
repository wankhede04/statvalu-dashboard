import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import * as XLSX from 'ts-xlsx';
import { Store, Select} from '@ngxs/store';
import { Observable } from 'rxjs';
import { NoteDetailsState } from '../store/files/notes.state';
import { Notes } from '../store/files/notes.actions';

@Component({
  selector: 'app-excel',
  templateUrl: './excel.component.html',
  styleUrls: ['./excel.component.scss']
})
export class ExcelComponent implements OnInit {
  public items: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  public fileUpload: File = null;
  public fileURL: SafeResourceUrl;
  public uploadedFile: SafeResourceUrl;
  public arrayBuffer: any;

  columnDefs = [
    { field: 'make' },
    { field: 'model' },
    { field: 'price' },
    { field: 'price' },
    { field: 'price' },
    { field: 'price' },
    { field: 'price' },
    { field: 'price' },
  ];

  rowData = [
    { make: 'Toyota', model: 'Celica', price: 35000 },
    { make: 'Ford', model: 'Mondeo', price: 32000 },
    { make: 'Porsche', model: 'Boxter', price: 72000 },
    { make: 'Porsche', model: 'Boxter', price: 72000 },
    { make: 'Porsche', model: 'Boxter', price: 72000 },
    { make: 'Porsche', model: 'Boxter', price: 72000 },
    { make: 'Porsche', model: 'Boxter', price: 72000 },
    { make: 'Porsche', model: 'Boxter', price: 72000 },
    { make: 'Porsche', model: 'Boxter', price: 72000 },
    { make: 'Porsche', model: 'Boxter', price: 72000 },
  ];
  data: any;
  dataUnderArray: any;

  @Select(NoteDetailsState.getExcel)
  public excels$: Observable<any>;

  constructor(private modalService: NgbModal, private sanitizer: DomSanitizer, private store: Store) {
    const url = 'https://docs.google.com/spreadsheets/d/1HDlSCIp1ECs_lO10rnSIli0ue8VDyo9mcwxFkkpw4m0/edit#gid=0'
    this.uploadedFile = this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  ngOnInit() {
  }

  public uploadDocument(content: any) {
    const modalRef = this.modalService.open(content, {size: 'sm'});
  }

  public handleFileInput(files: FileList) {
    const fileURL = URL.createObjectURL(files.item(0));
    console.log(fileURL)
    this.fileURL = this.sanitizer.bypassSecurityTrustResourceUrl(fileURL);

    let fileReader = new FileReader();
    fileReader.onload = (e) => {
      this.arrayBuffer = fileReader.result;
      var data = new Uint8Array(this.arrayBuffer);
      var arr = new Array();
      for(var i = 0; i != data.length; ++i) arr[i] = String.fromCharCode(data[i]);
      var bstr = arr.join("");
      var workbook = XLSX.read(bstr, {type:"binary"});
      var first_sheet_name = workbook.SheetNames[0];
      var worksheet = workbook.Sheets[first_sheet_name];
      this.dataUnderArray = XLSX.utils.sheet_to_json(worksheet,{raw:true})[0];
      this.data = XLSX.utils.sheet_to_json(worksheet,{raw:true});
      this.store.dispatch(new Notes.Excel({data: this.data, name: files.item(0).name}));
  }
  fileReader.readAsArrayBuffer(files.item(0));
    this.modalService.dismissAll();
  }

  saveCalendar(event) {
    console.log(event);
  }

  public openFile(fileURL: any) {
    this.data = fileURL;
    this.fileURL = this.sanitizer.bypassSecurityTrustResourceUrl(fileURL);
  }
}

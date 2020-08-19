import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FileUploaderService {
  private headers: any;
  constructor(private http: HttpClient) {
    this.headers = {
      "content-type": 'application/pdf',
      "content-length": '*/*'
    }
  }

  public uploadFileData(fileData: any): Observable<any> {
    return this.http.post(
      `https://www.googleapis.com/upload/drive/v3/files?uploadType=media`,
      fileData,
      this.headers
    );
  }
}

import { SafeResourceUrl } from '@angular/platform-browser';

export namespace Notes {
  export class PDF {
    static readonly type = '[Note] Get PDFs';

    constructor(public fileDetails: any) {}
  }

  export class Excel {
    static readonly type = '[Note] Create Note';

    constructor(public noteDetails: any) {}
  }
}
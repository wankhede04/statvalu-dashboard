import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShellComponent } from './shell/shell.component';
import { ExcelComponent } from './excel/excel.component';
import { DocsComponent } from './docs/docs.component';
import { PdfsComponent } from './pdfs/pdfs.component';
import { ChartsComponent } from './charts/charts.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    ShellComponent,
    ExcelComponent,
    DocsComponent,
    PdfsComponent,
    ChartsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

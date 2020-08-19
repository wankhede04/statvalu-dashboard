import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShellComponent } from './shell/shell.component';
import { ExcelComponent } from './excel/excel.component';
import { DocsComponent } from './docs/docs.component';
import { PdfsComponent } from './pdfs/pdfs.component';
import { ChartsComponent } from './charts/charts.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '',
    component: ShellComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'excel', component: ExcelComponent },
      { path: 'docs', component: DocsComponent },
      { path: 'pdfs', component: PdfsComponent },
      { path: 'charts', component: ChartsComponent },
    ],
    data: { reuse: true }
  },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

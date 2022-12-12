import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { GridComponent } from './features/grid/pages/grid.component';
import { OverviewPdfComponent } from './features/overview/pages/overview-pdf.component';

const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'overview', component: OverviewPdfComponent },
  { path: 'grid', component: GridComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

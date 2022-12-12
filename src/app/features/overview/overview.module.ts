import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverviewPdfComponent } from './pages/overview-pdf.component';
import {
  DxDataGridModule,
  DxButtonModule,
  DxTabPanelModule,
} from 'devextreme-angular';

@NgModule({
  declarations: [OverviewPdfComponent],
  imports: [CommonModule, DxDataGridModule, DxButtonModule, DxTabPanelModule],
})
export class OverviewModule {}

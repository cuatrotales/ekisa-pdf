import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridComponent } from './pages/grid.component';
import { DxButtonModule, DxDataGridModule, DxFormModule } from 'devextreme-angular';

@NgModule({
  declarations: [GridComponent],
  imports: [CommonModule, DxFormModule, DxButtonModule, DxDataGridModule],
})
export class GridModule {}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { OverviewModule } from './features/overview/overview.module';
import { AppRoutingModule } from './app-routing.module';
import { GridModule } from './features/grid/grid.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, OverviewModule, GridModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

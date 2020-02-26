import { BrowserModule } from '@angular/platform-browser';
import { NgModule, enableProdMode } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { DxTreeViewModule } from 'devextreme-angular';

import { AppComponent } from './app.component';
import { TreeViewComponent } from './tree-view/tree-view.component';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
if (!/localhost/.test(document.location.host)) {
  enableProdMode();
}

@NgModule({
  declarations: [
    AppComponent,
    TreeViewComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    DxTreeViewModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
platformBrowserDynamic().bootstrapModule(AppModule);
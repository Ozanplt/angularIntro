import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';

import {TabMenuModule} from 'primeng/tabmenu';
import {TableModule} from 'primeng/table';
import {ListboxModule} from 'primeng/listbox';
import { NaviComponent } from './navi/navi.component';
import { CategoryComponent } from './category/category.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    NaviComponent,
    CategoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TabMenuModule,
    TableModule,
    ListboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {InternalMaterialModule} from './material-module';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductViewComponent } from './components/product-view/product-view.component'

import {DataService} from './services/data.service';
import { Store } from '@ngrx/store';
import { StoreModule } from '@ngrx/store';
import {reducer} from './reducers/project.reducer';

import { NgxJsonViewerModule } from 'ngx-json-viewer';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ProductListComponent,
    ProductViewComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    InternalMaterialModule,
    StoreModule.forRoot({
      project: reducer
    }),
    NgxJsonViewerModule
  ],
  providers: [DataService,Store],
  bootstrap: [AppComponent]
})
export class AppModule { }

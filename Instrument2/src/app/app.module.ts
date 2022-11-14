import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InstDetailComponent } from './inst-detail/inst-detail.component';
import { InstListComponent } from './inst-list/inst-list.component';

@NgModule({
  declarations: [
    AppComponent,
    InstDetailComponent,
    InstListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

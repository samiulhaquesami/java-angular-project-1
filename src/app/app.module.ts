import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//adding http module for REST API calls and copy module name HttpClientModule and paste it
//in the imports:
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

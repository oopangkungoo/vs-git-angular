import {HttpModule} from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FirstPlayerComponent } from './first-player/first-player.component';
import { SecondPlayerComponent } from './second-player/second-player.component';
import { ConfirmPlayerComponent } from './confirm-player/confirm-player.component';
import { WinComponent } from './win/win.component';
import { AppRoutingModule } from './app.routing';
import { AppService } from './app.service';
import {  HttpClientModule } from '@angular/common/http';
import { DetailComponent } from './first-player/detail/detail.component';

import { AppDirective } from './app.directive';
import { AppPipe } from './app.pipe';
import { WindetailComponent } from './win/windetail/windetail.component';




@NgModule({
  declarations: [
    AppComponent,
    FirstPlayerComponent,
    SecondPlayerComponent,
    ConfirmPlayerComponent,
    WinComponent,
    DetailComponent,
    AppDirective,
    AppPipe,
    WindetailComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }

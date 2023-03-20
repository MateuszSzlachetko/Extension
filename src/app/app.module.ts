import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { InputAreaComponent } from './input-area/input-area.component';
import { RecaptchaModule } from 'ng-recaptcha';
import { FormsModule } from '@angular/forms';
import { ScreenshotToolComponent } from './input-area/screenshot-tool/screenshot-tool.component';

@NgModule({
  declarations: [AppComponent, NavbarComponent, InputAreaComponent, ScreenshotToolComponent],
  imports: [BrowserModule, AppRoutingModule, RecaptchaModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NZ_I18N, en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './header/header.component';
import {NgZorroModule} from './ng-zorro.module';
import { HomeSection1Component } from './home-section1/home-section1.component';
import { HomeSection2Component } from './home-section2/home-section2.component';
import { HomeSection3Component } from './home-section3/home-section3.component';
import { HomeSection7Component } from './home-section7/home-section7.component';
import { HomeSection5Component } from './home-section5/home-section5.component';
import { HomeSection6Component } from './home-section6/home-section6.component';
import { FooterComponent } from './footer/footer.component';
import { HomeSection4Component } from './home-section4/home-section4.component';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    HomeSection1Component,
    HomeSection2Component,
    HomeSection3Component,
    HomeSection7Component,
    HomeSection5Component,
    HomeSection6Component,
    FooterComponent,
    HomeSection4Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgZorroModule
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule { }

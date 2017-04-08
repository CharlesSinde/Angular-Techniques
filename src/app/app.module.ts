import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Ver1Component } from './components-ex/ver1/ver1.component';
import { Ver2Component } from './components-ex/ver2/ver2.component';
import { Ver2c1Component } from './components-ex/ver2/ver2c1/ver2c1.component';
import { Ver3Component } from './components-ex/ver3/ver3.component';
import { Ver3c1Component } from './components-ex/ver3/ver3c1/ver3c1.component';
import { V3ServiceService } from 'app/components-ex/ver3/services/v3-service.service';
import { ComponentsExComponent } from './components-ex/components-ex/components-ex.component';
import { StyleExComponent } from './style-ex/style-ex/style-ex.component';

@NgModule({
  declarations: [
    AppComponent,
    Ver1Component,
    Ver2Component,
    Ver2c1Component,
    Ver3Component,
    Ver3c1Component,
    ComponentsExComponent,
    StyleExComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [V3ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }

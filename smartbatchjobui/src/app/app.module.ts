import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { CreateBatchJobComponent } from './create-batch-job/create-batch-job.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { SharedModule } from './shared/shared.module';
import { DialogBoxComponent } from './dialog-box/dialog-box.component';
import { AgGridModule } from 'ag-grid-angular';
import { CreateBatchJobDataComponent } from './create-batch-job-data/create-batch-job-data.component';
import { SubmitJobComponent } from './submit-job/submit-job.component';
import { BtnCellRenderer } from './buttons/button-cell-renderer.component';
import { Grid } from 'ag-grid-community'

@NgModule({
  declarations: [
    AppComponent,
    CreateBatchJobComponent,
    LoginComponent,
    RegisterComponent,
    DialogBoxComponent,
    CreateBatchJobDataComponent,
    SubmitJobComponent,
    BtnCellRenderer

  ],
  imports: [
    BrowserModule,
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    HttpClientModule,
    SharedModule,
    AgGridModule,
    AgGridModule.withComponents([BtnCellRenderer])
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
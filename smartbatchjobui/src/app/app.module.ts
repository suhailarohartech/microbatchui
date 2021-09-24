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
import { UpdateDataJobComponent } from './Update-Data-Job/Update-Data-Job.component';
import { Editbatchjob } from './edit-batch-job/edit-batch-job.component';
import { AddDialogComponent } from './shared/dialogs/add-dialog-component/add-dialog-component.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateBatchJobComponent,
    LoginComponent,
    RegisterComponent,
    DialogBoxComponent,
    UpdateDataJobComponent,
    Editbatchjob,
    AddDialogComponent,

  ],
  imports: [
    BrowserModule,
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    HttpClientModule,
    SharedModule,
    AgGridModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
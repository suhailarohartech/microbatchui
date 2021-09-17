import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateBatchJobComponent } from './create-batch-job/create-batch-job.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
//import { CreateBatchJobDataComponent } from 'src/app/create-batch-job-data/create-batch-job-data.component';
import { UpdateDataJobComponent } from './Update-Data-Job/Update-Data-Job.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'cbc', component: CreateBatchJobComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  //{ path: 'data', component: CreateBatchJobDataComponent },
  { path: 'update', component: UpdateDataJobComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
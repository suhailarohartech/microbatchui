import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup , Validators} from '@angular/forms';
import { DataService } from 'src/app/data.service';
import { CreateBatchJob } from 'src/app/model/create-batch-jobDto';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-submit-job',
  templateUrl: './submit-job.component.html',
  styleUrls: ['./submit-job.component.css']
})
export class SubmitJobComponent implements OnInit {

  
  public batchForm!: FormGroup;

  SubmitBatchJobList : any = [

    this.batchForm = new FormGroup({
      batchJobName : new FormControl('',[Validators.required])
     
   })
  ];

  constructor(public http:HttpClient,private dataService: DataService) { }

  ngOnInit(): void {

    this.batchForm = new FormGroup({
      batchJobName : new FormControl('',[Validators.required])
     
   });

   let response1 = this.http.get("http://localhost:4200/api/cbj/{createBatchJobId}");
      response1.subscribe((data)=>this.SubmitBatchJobList=response);
      
      let response = this.http.get("http://localhost:4200/api/cbj/allGet");
      response.subscribe((data)=>this.SubmitBatchJobList=response);
        
  }

}
import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { CreateBatchJob } from 'src/app/model/create-batch-jobDto';
import { HttpClient } from '@angular/common/http';
import { CreateBatchJobComponent } from '../create-batch-job/create-batch-job.component';
import { FormControl, FormGroup , Validators} from '@angular/forms';

@Component({
  selector: 'app-create-batch-job-data',
  templateUrl: './create-batch-job-data.component.html',
  styleUrls: ['./create-batch-job-data.component.css']
})
export class CreateBatchJobDataComponent implements OnInit {

  
  public batchForm!: FormGroup;
  gridApi: any;
  columnApi: any;
  column = [
    { "headerName": "ParameterName",        "field": "parameterName" },
    { "headerName": "ParameterDescription", "field": "parameterDescription" },
    { "headerName": "ParameterType",        "field": "parameterType"    },
    { "headerName": "parameterFormat",      "field": "parameterFormat"    },
    { "headerName": "mandatoryFlag",        "field": "mandatoryFlag"    },
    { "headerName": "visibleFlag",          "field": "visibleFlag"    },
    { "headerName": "defaultValue",         "field": "defaultValue"    },
    { "headerName": "regexforValidation",   "field": "regexforValidation"  }
  ];

  rowData = [
  ];

 /* batchJobList : any[] = [
    //{name: 'Send SMS'},
    //{name: 'Send Email'}
  ];*/
  //batchJobList : any;

   /*batchJobList: any = {
    batchJobName : "",batchJobDescription : "",batchJobType : "",
    createBatchJobParameter: []
  };*/
    batchJobList : any = [

    this.batchForm = new FormGroup({
      batchJobName : new FormControl('',[Validators.required])
     
   })
  ];
  onGridReady(params:any) {
    this.gridApi = params.api;
    this.columnApi = params.columnApi;   
    params.api.sizeColumnsToFit();
  }

  constructor(private dataService: DataService,public http:HttpClient) { }

  ngOnInit(): void {

    this.batchForm = new FormGroup({
      batchJobName : new FormControl('',[Validators.required])
     
   });
   
   this.dataService.getAll().subscribe(
    response => {
      this.batchJobList = this.dataService.getAll();
      //this.gridApiPollQData.setRowData(this.rowPollQDataData);
    },

      //let response = this.http.get("http://localhost:4200/api/cbj/allGet");
      //response.subscribe((data)=>this.batchJobList=response);
      
 //   console.log("Call REST for getting Job name");
 );
  }
}
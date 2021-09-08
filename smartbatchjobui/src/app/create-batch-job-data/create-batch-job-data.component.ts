import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { CreateBatchJob } from 'src/app/model/create-batch-jobDto';
import { HttpClient } from '@angular/common/http';
import { CreateBatchJobComponent } from '../create-batch-job/create-batch-job.component';
import { FormControl, FormGroup, Validators } from '@angular/forms';

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
    { "headerName": "ParameterName", "field": "parameterName" },
    { "headerName": "ParameterDescription", "field": "parameterDescription" },
    { "headerName": "ParameterType", "field": "parameterType" },
    { "headerName": "parameterFormat", "field": "parameterFormat" },
    { "headerName": "mandatoryFlag", "field": "mandatoryFlag" },
    { "headerName": "visibleFlag", "field": "visibleFlag" },
    { "headerName": "defaultValue", "field": "defaultValue" },
    { "headerName": "regexforValidation", "field": "regexforValidation" },
    {
      headerName: 'Edit',
      cellRenderer: 'buttonRenderer',
      cellRendererParams: {

        label: 'Edit'
      }
    },
    {
      headerName: 'Delete',
      cellRenderer: 'buttonRenderer',
      cellRendererParams: {

        label: 'Delete'
      }
    }
  ];

  rowData = [
  ];

  batchJobList: any = [
    this.batchForm = new FormGroup({
      batchJobName: new FormControl('', [Validators.required])
    })
  ]

  onGridReady(params: any) {
    this.gridApi = params.api;
    this.columnApi = params.columnApi;
    params.api.sizeColumnsToFit();
  }

  constructor(private dataService: DataService, private http: HttpClient) { }

  public addParameterAction() {
    console.log('Click!....', this.batchForm.controls.batchJobName.value);
  }
  ngOnInit(): void {



    this.http.get('http://localhost:8080/api/cbj/allGet').subscribe(
      data => {
        this.batchJobList = data as any[];
        console.log("get all")
      }
    );
    this.http.get('http://localhost:8080/api/cbj/48').subscribe(
      data => {
        this.gridApi = data as any[];
        console.log("get all")
      }
    )
  }
}
import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { CreateBatchJob } from 'src/app/model/create-batch-jobDto';
import { HttpClient } from '@angular/common/http';
import { CreateBatchJobComponent } from '../create-batch-job/create-batch-job.component';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BtnCellRenderer } from '../buttons/button-cell-renderer.component';

@Component({
  selector: 'app-create-batch-job-data',
  templateUrl: './create-batch-job-data.component.html',
  styleUrls: ['./create-batch-job-data.component.css']
})
export class CreateBatchJobDataComponent implements OnInit {

  public batchForm!: FormGroup;


  parameterList: any[] = [];
  BatchJob: CreateBatchJob = {
    batchJobName: "", batchJobDescription: "", batchJobType: "",
    createBatchJobParameter: []
  };
  createBatchJobParameter: CreateBatchJob = Object.assign({}, this.BatchJob);
  validationFlag: boolean = true;
  showQuestion: boolean = false;
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
      "headerName": "actions", "field": "actions",
      cellRenderer: "btnCellRenderer",
      cellRendererParams: {
        clicked: function () {
        },
        minWidth: 150
      }
    }

  ];

  frameworkComponents = {
    btnCellRenderer: BtnCellRenderer
  };


  rowData: any[] = [];

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

  public addParameterFlag = false;
  public addFlag = false;

  ngOnInit(): void {
    this.batchForm = new FormGroup({
      batchJobName: new FormControl('', [Validators.required]),
      parameterName: new FormControl(''),
      parameterDescription: new FormControl(''),
      parameterType: new FormControl(''),
      parameterFormat: new FormControl(''),
      mandatoryFlag: new FormControl(''),
      visibleFlag: new FormControl(''),
      defaultValue: new FormControl(''),
      regexforValidation: new FormControl('')

    });


    this.http.get('http://localhost:8080/api/cbj/allGet/').subscribe(
      data => {
        this.batchJobList = data as any[];
        console.log("get all")
      }
    );

  }
  ondelete() {
    //console.log(d.id)
    this.http.delete('http://localhost:8080/api/ParameterDelete/1').subscribe(
      data => {
        console.log("delete")
      }
    )
  };

  doSomething(test: any, t: any) {
    console.log(test)
    console.log(t.id)
    this.http.get('http://localhost:8080/api/cbj/' + t.id).subscribe(
      data => {
        this.rowData = data as any[];
        this.gridApi.setRowData(this.rowData)
        console.log("get all")
      }
    );

  }
  public addParameterAction() {
    this.addParameterFlag = true;
    console.log('Click!....');
    console.log('Click!....', this.batchForm.controls.batchJobName.value);
    let batchname = this.batchForm.controls.batchJobName.value;
    let desc = this.batchForm.controls.batchJobDescription.value;
    let type = this.batchForm.controls.batchJobType.value;
    this.batchForm.reset();
    this.batchForm.patchValue({
      batchJobName: batchname,
      batchJobDescription: desc,
      batchJobType: type
    })

  }

  addAction(): void {
    this.validationFlag = this.batchForm.valid;
    console.log("form", this.batchForm)
    console.log("Data", this.validationFlag)
    let createBatchJob: CreateBatchJob = this.batchForm.value;
    let CreateBatchJobParameterCopy = Object.assign({}, createBatchJob);
    if (this.validationFlag) {

      this.createBatchJobParameter = Object.assign({}, this.BatchJob);

      this.parameterList.push(CreateBatchJobParameterCopy)
      this.gridApi.setRowData(this.parameterList);
    } else {
      this.createBatchJobParameter = CreateBatchJobParameterCopy;
    }

  }
}
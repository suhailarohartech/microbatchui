import { Component, OnInit } from '@angular/core';
import {ControlContainer, FormControl, NgForm} from '@angular/forms';
import { FormGroup , Validators} from '@angular/forms';
import { Location } from '@angular/common';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { CreateBatchJob } from '../model/create-batch-jobDto';
//import { CreateBatchJobParameter } from 'src/app/model/CreateBatchJobParameter';
import { DataService } from 'src/app/data.service'
import { SuccessDialogComponent } from './../shared/dialogs/success-dialog/success-dialog.component';
import { ErrorHandlerService } from '../shared/error-handler.service';

@Component({
  selector: 'app-create-batch-job',
  templateUrl: './create-batch-job.component.html',
  styleUrls: ['./create-batch-job.component.css']
})
export class CreateBatchJobComponent implements OnInit {

  public batchForm!: FormGroup;
  private dialogConfig :any;
  parameterList:any[]=[];

    BatchJob: CreateBatchJob = {
    batchJobName : "",batchJobDescription : "",batchJobType : "",
    createBatchJobParameter: []
  };
  createBatchJobParameter: CreateBatchJob = Object.assign({},this.BatchJob);
  validationFlag: boolean = true;
  showQuestion : boolean = false;

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

  onGridReady(params:any) {
    this.gridApi = params.api;
    this.columnApi = params.columnApi;   
    params.api.sizeColumnsToFit();
  }

  constructor(private location: Location,
    private dataService: DataService,
    private dialog: MatDialog,
    private errorService: ErrorHandlerService) { }

  public addParameterFlag = false;
  public addFlag = false;
 
  ngOnInit(): void {  
   this.batchForm = new FormGroup({
    batchJobName : new FormControl('',[Validators.required]),
    batchJobDescription : new FormControl('',[Validators.required]),
    batchJobType : new FormControl(''),
    parameterName : new FormControl(''),
    parameterDescription : new FormControl(''),
    parameterType : new FormControl(''),
    parameterFormat : new FormControl(''),
    mandatoryFlag : new FormControl(''),
    visibleFlag : new FormControl(''),
    defaultValue : new FormControl(''),
    regexforValidation : new FormControl('')

 });
  this.dialogConfig = {
    height: '200px',
    width: '400px',
    disableClose: true,
    data: { }
  };}
 

  //batch(batchForm:NgForm,submit:any){
    //console.log(batchForm.value,batchForm.valid,submit);

 //}
 public hasError = (controlName: string, errorName: string) =>{
  return this.batchForm.controls[controlName].hasError(errorName);
  }
  public onCancel = () => {
    this.location.back();
  }
 public addParameterAction(){
   this.addParameterFlag = true;
   console.log('Click!....');
   console.log('Click!....',this.batchForm.controls.batchJobName.value);
   let batchname = this.batchForm.controls.batchJobName.value;
   let desc = this.batchForm.controls.batchJobDescription.value;
   let type = this.batchForm.controls.batchJobType.value;
   this.batchForm.reset();
   this.batchForm.patchValue({
    batchJobName:batchname,
    batchJobDescription:desc,
    batchJobType:type
   })
     //  parameterName : new FormControl(''),
  //  parameterDescription : new FormControl(''),
  //  parameterType : new FormControl(''),
  //  parameterFormat : new FormControl(''),
  //  mandatoryFlag : new FormControl(''),
  //  visibleFlag : new FormControl(''),
  //  defaultValue : new FormControl(''),
  //  regexforValidation : new FormControl('')

 }
//  public addAction(){
//   this.addFlag = true;
//   console.log('Click!....');
// }

public savebatchForm = (batchFormvalue: { batchJobName:any,batchJobDescription:any
  ,batchJobType:any,parameterName:any,parameterDescription:any
  ,parameterType:any,parameterFormat:any,mandatoryFlag:any
  ,visibleFlag:any,defaultValue:any,regexforValidation:any
}) =>{
  if(this.batchForm.valid){
    let createBatchJob : CreateBatchJob = {
      batchJobName : batchFormvalue.batchJobName,
      batchJobDescription : batchFormvalue.batchJobDescription,
      batchJobType : batchFormvalue.batchJobType,
      createBatchJobParameter:this.parameterList
      };

      console.log(createBatchJob)
     
      this.dataService.create("cbj",createBatchJob).subscribe(
       res => {
         let dialogRef = this.dialog.open(SuccessDialogComponent, this.dialogConfig);
         dialogRef.afterClosed()
         .subscribe(result => {
           this.location.back();
         });
       },
       (error => {
         this.errorService.dialogConfig = { ...this.dialogConfig };
         this.errorService.handleError(error);
       })
     );  

  }
}
cleanGrid() : void {
  this.dataService.create.arguments;
  this.rowData = [];
  this.gridApi.setRowData(this.rowData);
}
addAction() : void {
  this.validationFlag = this.batchForm.valid;
 console.log("form",this.batchForm)
 console.log("Data",this.validationFlag)
  let createBatchJob : CreateBatchJob = this.batchForm.value;
  let CreateBatchJobParameterCopy = Object.assign({},createBatchJob);
  if(this.validationFlag) {
    // this.rowData = this.dataService.create.arguments;
      
    this.createBatchJobParameter = Object.assign({},this.BatchJob);

    this.parameterList.push(CreateBatchJobParameterCopy)  
    this.gridApi.setRowData(this.parameterList);
  } else {
    this.createBatchJobParameter = CreateBatchJobParameterCopy;
  }
  
}
}
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DataService } from 'src/app/data.service';
import { CreateBatchJob } from 'src/app/model/create-batch-jobDto';
import { CreateBatchJobParameter } from 'src/app/model/CreateBatchJobParameter';
import { HttpClient } from '@angular/common/http';

export interface PeriodicElement {
  name: any;
  id: any;
  parameterName: String;
  parameterDescription: String;
  parameterType: String;
  parameterFormat: String;
  mandatoryFlag: Boolean;
  visibleFlag: Boolean;
  defaultValue: String;
  regexforValidation: String;
}

const ELEMENT_DATA: PeriodicElement[] = [

];

@Component({
  selector: 'app-Update-Data-Job',
  templateUrl: './Update-Data-Job.component.html',
  styleUrls: ['./Update-Data-Job.component.css']
})
export class UpdateDataJobComponent implements OnInit {

  displayedColumns: any[] = ['parameterName', 'parameterDescription', 'parameterType', 'parameterFormat',
    'mandatoryFlag', 'visibleFlag', 'defaultValue', 'regexforValidation', 'actions'];

  dataSource = ELEMENT_DATA;

  public batchForm!: FormGroup;
  //public data:any;
  //public CreateBatchJobParameter:any;

  SubmitBatchJobList: any = [

    this.batchForm = new FormGroup({
      batchJobName: new FormControl('', [Validators.required])

    })
  ];
  batchJobList: any = [
    this.batchForm = new FormGroup({
      batchJobName: new FormControl('', [Validators.required])
    })
  ]
  constructor(public http: HttpClient, private dataService: DataService) { }

  ngOnInit(): void {

    this.batchForm = new FormGroup({
      batchJobName: new FormControl('', [Validators.required])

    });

    this.http.get('http://localhost:8080/api/cbj/allGet/').subscribe(
      data => {
        this.batchJobList = data as any[];
        console.log("get all")
        console.log(this.batchJobList)
      }
    );
  }
  doSomething(test: any, t: any) {
    console.log(test)
    console.log(t.id)
    this.http.get('http://localhost:8080/api/cbj/' + t.id).subscribe(
      data => {
        this.dataSource = data as any[];
        console.log("get all")
      }
    );
  }
  onDelete(w: any) {
    console.log(w.id)
    this.http.delete('http://localhost:8080/api/ParameterDelete/' + w.id)
      .subscribe(() => {
        console.log('Deleted');
      });
  }
  onEdit(a: any, b: any) {

    console.log('update')
  }

  ADD() {
    //console.log(id)
    console.log('ADD')
  }
}
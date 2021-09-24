import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DataService } from 'src/app/data.service';
import { CreateBatchJob } from 'src/app/model/create-batch-jobDto';
import { CreateBatchJobParameter } from 'src/app/model/CreateBatchJobParameter';
import { HttpClient } from '@angular/common/http'; import { ActivatedRoute, Router } from '@angular/router';
import {
  MatDialog,
  MatDialogConfig,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { Editbatchjob } from 'src/app/edit-batch-job/edit-batch-job.component';
import { AddDialogComponent } from 'src/app/shared/dialogs/add-dialog-component/add-dialog-component.component';

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
  id: any;
  constructor(public http: HttpClient, private dataService: DataService, private router: Router,
    private route: ActivatedRoute,
    private dialog: MatDialog) { }

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
  oncreate() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '60%';
    this.dialog.open(AddDialogComponent, dialogConfig);
    let batchname = this.batchForm.controls.batchJobName.value;
    let desc = this.batchForm.controls.batchJobDescription.value;
    let type = this.batchForm.controls.batchJobType.value;
    this.batchForm.reset();
    this.batchForm.patchValue({
      batchJobName: batchname,
      batchJobDescription: desc,
      batchJobType: type,
    });
  }

  onEdit() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '60%';
    this.dialog.open(Editbatchjob, dialogConfig);
  }
  openDialog(): void { }
}
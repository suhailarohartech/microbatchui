import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateBatchJobDataComponent } from './create-batch-job-data.component';

describe('CreateBatchJobDataComponent', () => {
  let component: CreateBatchJobDataComponent;
  let fixture: ComponentFixture<CreateBatchJobDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateBatchJobDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateBatchJobDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

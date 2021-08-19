import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateBatchJobComponent } from './create-batch-job.component';

describe('CreateBatchJobComponent', () => {
  let component: CreateBatchJobComponent;
  let fixture: ComponentFixture<CreateBatchJobComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateBatchJobComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateBatchJobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

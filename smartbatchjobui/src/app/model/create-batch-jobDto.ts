import { CreateBatchJobParameter } from "./CreateBatchJobParameter";

export interface CreateBatchJob{
    batchJobName : String;
    batchJobDescription : String;
    batchJobType : String;
    createBatchJobParameter:CreateBatchJobParameter[];
}
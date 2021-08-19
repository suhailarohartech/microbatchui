export interface CreateBatchJobParameter{
    /*batchJobName : String;
    batchJobDescription : String;
    batchJobType : String;*/
    parameterName : String;
    parameterDescription : String;
    parameterType : String;
    parameterFormat : String;
    mandatoryFlag : Boolean;
    visibleFlag : Boolean;
    defaultValue : String;
    regexforValidation : String;
}
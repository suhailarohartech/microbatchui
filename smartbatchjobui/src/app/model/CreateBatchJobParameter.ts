export interface CreateBatchJobParameter {
    parameterName: String;
    parameterDescription: String;
    parameterType: String;
    parameterFormat: String;
    mandatoryFlag: Boolean;
    visibleFlag: Boolean;
    defaultValue: String;
    regexforValidation: String;
}
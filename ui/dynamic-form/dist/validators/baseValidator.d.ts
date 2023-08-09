export interface IRuleString {
    type: 'string';
    rule: 'not-empty' | 'max-length' | 'min-length' | '=' | '!=' | 'is-email' | 'is-email-or-empty' | 'is-uuid' | 'is-uuid-or-empty';
    parameter?: ((value: unknown) => unknown) | unknown;
    message: string;
}
export interface IRuleNumber {
    type: 'number';
    rule: 'not-empty' | 'number-or-empty' | '=' | '!=' | '>' | '>=' | '<' | '<=';
    parameter?: ((value: unknown) => unknown) | unknown;
    message: string;
}
export interface IRuleFile {
    type: 'file';
    rule: 'not-empty' | 'extension';
    parameter?: ((value: unknown) => unknown) | unknown;
    message: string;
}
export interface IRuleDate {
    type: 'date';
    rule: 'not-empty' | 'date-or-empty' | '=' | '!=' | '>' | '>=' | '<' | '<=';
    parameter?: ((value: unknown) => unknown) | unknown;
    message: string;
}
export interface IRuleObject {
    type: 'object';
    rule: 'not-empty' | 'null' | '=' | '!=' | 'contains' | 'not-contains';
    parameter?: ((value: unknown) => unknown) | unknown;
    message: string;
}
export interface IRuleCustom {
    type: 'custom';
    callback: (value: unknown, allValues: Record<string, unknown> | undefined) => string;
}
export type IRuleType = IRuleString | IRuleNumber | IRuleDate | IRuleFile | IRuleObject | IRuleCustom;
export declare class BaseValidator {
    validate(values: Record<string, unknown>, validationRules?: Record<string, IRuleType[]>, hidden?: Record<string, boolean>): Record<string, string>;
    validateValue(value: unknown, validationRules?: IRuleType[], allValues?: Record<string, unknown>): string;
    private validateString;
    private validateFile;
    private validateNumber;
    private validateDate;
    private validateRowObject;
    private isNumeric;
}

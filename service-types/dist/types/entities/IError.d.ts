/** Error type */
export type IError = {
    /** Error code */
    code: number;
    /** Internal error name */
    error: string;
    /** Error message */
    message: string;
    /** Stack trace */
    stack?: string;
};

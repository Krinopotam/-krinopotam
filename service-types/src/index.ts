
/** Type for promise with typed Resolve and Reject. F.e. TPromise<{data: Record<string, unknown>}, {message: string; code: number}>; */
export type TPromise<T, F = unknown> = {
    catch<TResult = never>(onrejected?: ((reason: F) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
} & Promise<T>;

/** Type of array element */
export type ArrayElement<A> = A extends readonly (infer T)[] ? T : never

/** Any type */
export type AnyType = any

/** Error type */
export type IError = {
    /** Error  code */
    code: number;

    /** Error message*/
    message: string;

    /** Stack trace */
    stack?: string;
}
/** Any type */
export type AnyType = any;

/** Type for promise with typed Resolve and Reject. F.e. TPromise<{data: Record<string, unknown>}, {message: string; code: number}>; */
export type TPromise<T, F = unknown> = {
    catch<TResult = never>(onrejected?: ((reason: F) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
} & Promise<T>;

/** Type of array element */
export type ArrayElement<A> = A extends readonly (infer T)[] ? T : never;

/** Non-empty array */
export type INonEmptyArray<T> = [T, ...T[]];

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

export type IUnionToIntersection<T> = (T extends any ? (k: T) => void : never) extends (k: infer I) => void ? I : never;

/*
 * Union Interfaces
 * example: type CombinedInterface = UnionInterfaces<[InterfaceA, InterfaceB]>;
 * CombinedInterface will be a unified type where required properties will remain required and optional properties will remain optional
 */
export type IUnionInterfaces<T extends {[key: string]: any}[]> = IUnionToIntersection<T[number]>;

/** Return the same function type with addition parameter T at the end */
export type IAddParamToFunction<F, T> = NonNullable<F> extends (...args: infer P) => infer R ? (...args: [...P, T]) => R : never;

/** KeyboardEvent.key type */
export type {IKeyboardKey, IKeyboardCode} from './keys';

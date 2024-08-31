export type AnyType = any;
export type TPromise<T, F = unknown> = {
    catch<TResult = never>(onrejected?: ((reason: F) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
} & Promise<T>;
export type ArrayElement<A> = A extends readonly (infer T)[] ? T : never;
export type INonEmptyArray<T> = [T, ...T[]];
export type IError = {
    code: number;
    error: string;
    message: string;
    stack?: string;
};
export type IUnionToIntersection<T> = (T extends any ? (k: T) => void : never) extends (k: infer I) => void ? I : never;
export type IUnionInterfaces<T extends {
    [key: string]: any;
}[]> = IUnionToIntersection<T[number]>;
export type { IKeyboardKey, IKeyboardCode } from "./keys";

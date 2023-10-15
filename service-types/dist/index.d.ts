export type TPromise<T, F = unknown> = {
    catch<TResult = never>(onrejected?: ((reason: F) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
} & Promise<T>;
export type ArrayElement<A> = A extends readonly (infer T)[] ? T : never;
export type AnyType = any;

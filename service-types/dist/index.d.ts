export type TPromise<T, F = unknown> = {
    catch<TResult = never>(onrejected?: ((reason: F) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
} & Promise<T>;
export type AnyType = any;

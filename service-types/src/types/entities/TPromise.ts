/** Type for promise with typed Then and Catch
 * @example:
 * const prom:TPromise<string, number> = new Promise(()=>{...})
 * prom.then((val)=>{...}).catch((e)=>{...})
 * // 'val' will have type string and 'e' will have type number
 */
export type TPromise<T, F = unknown> = {
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: F) => TResult2 | PromiseLike<TResult2>) | undefined | null): TPromise<TResult1 | TResult2, F>;
    catch(onrejected: (reason: F) => void): void;
} & Promise<T>;

/** Return the same function type with addition parameters [T] at the end
 * @example:
 *  type MyFn = (val:number)=>string
 *  type MyExtraFn = IAddParamsToFunction<MyFn, [number, string]>
 *  // MyExtraFn will have type (val:number, args_1:number, args_2:string)=>string
 */
export type IAddParamsToFunction<F, T extends any[]> = NonNullable<F> extends (...args: infer P) => infer R ? (...args: [...P, ...T]) => R : never;
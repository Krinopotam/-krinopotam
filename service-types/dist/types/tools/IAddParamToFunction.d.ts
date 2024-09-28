/** Return the same function type with addition parameter T at the end
 * @example:
 *  type MyFn = (val:number)=>string
 *  type MyExtraFn = IAddParamToFunction<MyFn, number>
 *  // MyExtraFn will have type (val:number, args_1:number)=>string
 */
export type IAddParamToFunction<F, T> = NonNullable<F> extends (...args: infer P) => infer R ? (...args: [...P, T]) => R : never;

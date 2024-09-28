import { IUnionToIntersection } from "./IUnionToIntersection";
/** Union Interfaces
 * where required properties will remain required and optional properties will remain optional
 * @example:
 *  interface Obj1 { a: string; b: number };
 *  interface Obj2 { b: number; c: boolean };
 *  interface Obj3 { c: boolean; d?: string };
 *  type UnionInterfaces = IUnionInterfaces<[Obj1, Obj2, Obj3]>;
 *  // UnionInterfaces will have type { a: string; b: number; c: boolean; d?: string }
 */
export type IUnionInterfaces<T extends {
    [key: string]: any;
}[]> = IUnionToIntersection<T[number]>;

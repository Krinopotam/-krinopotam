/**
 * Converts a union type into an intersection of types.
 * @example:
 *  type UnionType = string | number | boolean;
 *  type IntersectionType = IUnionToIntersection<UnionType>;
 *  //IntersectionType will have type string & number & boolean
 */
export type IUnionToIntersection<T> = (T extends any ? (k: T) => void : never) extends (k: infer I) => void ? I : never;

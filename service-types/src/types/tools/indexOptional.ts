/** Convert indexed type to non-indexed (interface to type) */
export type IndexOptional<T> = Pick<T, keyof T>
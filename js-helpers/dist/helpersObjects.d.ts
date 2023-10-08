import hash from 'object-hash';
export declare const HelpersObjects: {
    isArray: (val: unknown) => boolean;
    isPromise: (val: unknown) => boolean;
    objectKeys: (val: unknown) => string[] | undefined;
    objectKeysLength: (val: unknown) => number;
    findIndexInObjectsArray: (objArray: Record<string, unknown>[], objProperty: string, searchVal: unknown) => number;
    findObjectInArray: (objArray: Record<string, unknown>[], objProperty: string, searchVal: unknown) => Record<string, unknown> | undefined;
    isObjectsEqual: <TObject, TSource>(obj1: TObject, obj2: TSource) => boolean;
    mergeObjects: <TObject_1, TSource_1>(object: TObject_1, source: TSource_1) => TObject_1 & TSource_1;
    cloneObject: <TObject_2>(object: TObject_2, maxLevel?: number) => TObject_2;
    hashObjectContent: (object: hash.NotUndefined, options?: hash.NormalOption) => string;
    isObjectHasOwnProperty: (obj: Record<string, unknown>, propName: string) => boolean;
    splitObject: <R1 extends object, R2 extends object>(obj: object, propNames: Required<{ [K in keyof R1]: boolean; }>) => [R1, R2];
    objectDiffs: (obj1: object, obj2: object, mode?: 'added' | 'deleted' | 'updated' | 'detailed') => object;
    isReactClassComponent: <T>(obj: T) => boolean;
    isReactComponent: <T_1>(obj: T_1) => boolean;
};

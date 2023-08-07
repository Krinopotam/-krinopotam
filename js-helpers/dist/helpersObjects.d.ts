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
    splitObject: <TObject_3>(obj: TObject_3, propNames: (keyof TObject_3)[]) => [TObject_3, TObject_3];
    objectDiffs: (obj1: object, obj2: object, mode?: 'added' | 'deleted' | 'updated' | 'detailed') => object;
};

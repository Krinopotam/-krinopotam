import {describe, it, expect} from 'vitest';
import {MergeObjects} from '@src/helpersObjects/mergeObjects';

describe('MergeObjects', () => {
    it('should deeply merge two objects', () => {
        const object = {'data': [{'user': 'barney'}]};
        const source = {'data': [{'age': 36}]};
        const result = MergeObjects(object, source);

        expect(result).toEqual({
            'data': [{'user': 'barney', 'age': 36}]
        });
    });

    it('should override with subsequent sources', () => {
        const object = {'a': 1, 'b': 2};
        const source1 = {'b': 3};
        const source2 = {'c': 4};
        const result = MergeObjects(object, source1);
        const finalResult = MergeObjects(result, source2);

        expect(finalResult).toEqual({
            'a': 1,
            'b': 3,
            'c': 4
        });
    });

    it('should deeply override with subsequent sources', () => {
        const object = {'data': [{'user': 'barney'}, {'age': 15}]};
        const source = {'data': [{'user': 'barney'}, {'age': 36}]};
        const result = MergeObjects(object, source);

        expect(result).toEqual({
            'data': [{'user': 'barney'}, {'age': 36}]
        });
    });

    it('should deeply override with subsequent sources', () => {
        const object = {'data': {props: {'user': 'barney', age: 15, city: 'London'}}};
        const source = {'data': {props: {'user': 'barney', age: 30}}};
        const result = MergeObjects(object, source);

        expect(result).toEqual({'data': {props: {'user': 'barney', age: 30, city: 'London'}}});
    });

    it('should not merge properties with undefined values', () => {
        const object = {'a': 1, 'b': 2};
        const source = {'b': undefined};
        const result = MergeObjects(object, source);

        expect(result).toEqual({
            'a': 1,
            'b': 2
        });
    });
});
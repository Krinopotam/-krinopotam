import {describe, it, expect} from 'vitest';
import {HashObjectContent} from '@src/helpersObjects/hashObjectContent';

describe('HashObjectContent', () => {
    it('should return a consistent hash for the same object', () => {
        const obj = {name: 'Alice', age: 30};
        const hash1 = HashObjectContent(obj);
        const hash2 = HashObjectContent(obj);
        expect(hash1).toBe(hash2);
    });

    it('should return a the same hash for similar objects with the same properties in different order', () => {
        const obj1 = {name: 'Alice', age: 30};
        const obj2 = {age: 30, name: 'Alice'};
        const hash1 = HashObjectContent(obj1);
        const hash2 = HashObjectContent(obj2);
        expect(hash1).toBe(hash2);
    });

    it('should return a the same hash for similar arrays', () => {
        const obj1 = [1,2,3];
        const obj2 = [1,2,3];
        const hash1 = HashObjectContent(obj1);
        const hash2 = HashObjectContent(obj2);
        expect(hash1).toBe(hash2);
    });

    it('should return different hash for similar arrays in different order', () => {
        const obj1 = [1,2,3];
        const obj2 = [3,2,1];
        const hash1 = HashObjectContent(obj1);
        const hash2 = HashObjectContent(obj2);
        expect(hash1).not.toBe(hash2);
    });

    it('should return a the same hash for similar complex objects', () => {
        const obj1 = [1,2,3, {name: 'Alice', age: 30, children:[{name: 'Bob', age: 25}, {name: 'Charlie', age: 20}]}];
        const obj2 = [1,2,3, {name: 'Alice', age: 30, children:[{name: 'Bob', age: 25}, {name: 'Charlie', age: 20}]}];
        const hash1 = HashObjectContent(obj1);
        const hash2 = HashObjectContent(obj2);
        expect(hash1).toBe(hash2);
    });

    it('should return a the same hash for similar complex objects with the same properties in different order', () => {
        const obj1 = [1,2,3, {name: 'Alice', age: 30, children:[{name: 'Bob', age: 25}, {name: 'Charlie', age: 20}]}];
        const obj2 = [1,2,3, {name: 'Alice', age: 30, children:[{name: 'Bob', age: 25}, {age: 20, name: 'Charlie'}]}];
        const hash1 = HashObjectContent(obj1);
        const hash2 = HashObjectContent(obj2);
        expect(hash1).toBe(hash2);
    });

    it('should return different hash for different complex objects', () => {
        const obj1 = [1,2,3, {name: 'Alice', age: 30, children:[{name: 'Bob', age: 25}, {name: 'Charlie', age: 20}]}];
        const obj2 = [1,2,3, {name: 'Alice', age: 30, children:[{name: 'Bob', age: 25}, {name: 'Charlie', age: 21}]}];
        const hash1 = HashObjectContent(obj1);
        const hash2 = HashObjectContent(obj2);
        expect(hash1).not.toBe(hash2);
    });

    it('should return different hash for similar complex objects with array in different order', () => {
        const obj1 = [1,2,3, {name: 'Alice', age: 30, children:[{name: 'Bob', age: 25}, {name: 'Charlie', age: 20}]}];
        const obj2 = [1,2,3, {name: 'Alice', age: 30, children:[{name: 'Charlie', age: 20}, {name: 'Bob', age: 25}]}];
        const hash1 = HashObjectContent(obj1);
        const hash2 = HashObjectContent(obj2);
        expect(hash1).not.toBe(hash2);
    });

    it('should return different hashes for different objects', () => {
        const obj1 = {name: 'Alice', age: 30};
        const obj2 = {name: 'Bob', age: 25};
        const hash1 = HashObjectContent(obj1);
        const hash2 = HashObjectContent(obj2);
        expect(hash1).not.toBe(hash2);
    });

    it('should return a different hash when object content changes', () => {
        const obj = {name: 'Alice', age: 30};
        const hash1 = HashObjectContent(obj);
        obj.age = 31;
        const hash2 = HashObjectContent(obj);
        expect(hash1).not.toBe(hash2);
    });

    it('should consider options when generating the hash', () => {
        const obj = {name: 'Alice', age: 30};
        const hash1 = HashObjectContent(obj, {algorithm: 'md5'});
        const hash2 = HashObjectContent(obj, {algorithm: 'md5'});
        expect(hash1).toBe(hash2);
    });
});
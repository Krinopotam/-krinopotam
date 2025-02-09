import {isInstanceOfClass} from '@src/helpersObjects/isInstanceOfClass';
import {describe, expect, it} from 'vitest';

class Test {}
const testInstance = new Test();
function testFunction() {}

describe('isInstanceOfClass', () => {
    it('should return true for an class instance', () => {
        const result = isInstanceOfClass(testInstance);
        expect(result).toBe(true);
    });

    it('should return false for an class constructor', () => {
        const result = isInstanceOfClass(Test);
        expect(result).toBe(false);
    });

    it('should return false for a function', () => {
        const result = isInstanceOfClass(testFunction);
        expect(result).toBe(false);
    });

    it('should return true for a date instance', () => {
        const result = isInstanceOfClass(new Date());
        expect(result).toBe(true);
    });
});
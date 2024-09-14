import { describe, it, expect } from 'vitest';
import { shouldSearchInChildren } from '@src/_shared/hooks/treeComponentApiMethods/serviceMethods/shouldSearchInChildren';

describe('shouldSearchInChildren', () => {
    it('should return true if opts.sameLevelOnly is false and expandedKeys includes node key', () => {
        const node = { key: 'node-key' };
        const expandedKeys = ['node-key'];
        const opts = { sameLevelOnly: false };
        expect(shouldSearchInChildren(node, expandedKeys, { key: 'key' }, opts)).toBe(true);
    });

    it('should return false if opts.sameLevelOnly is true', () => {
        const node = { key: 'node-key' };
        const expandedKeys = ['node-key'];
        const opts = { sameLevelOnly: true };
        expect(shouldSearchInChildren(node, expandedKeys, { key: 'key' }, opts)).toBe(false);
    });

    it('should return false if expandedKeys does not include node key', () => {
        const node = { key: 'node-key' };
        const expandedKeys = ['other-key'];
        const opts = { sameLevelOnly: false };
        expect(shouldSearchInChildren(node, expandedKeys, { key: 'key' }, opts)).toBe(false);
    });

    it('should return true if opts.expandedOnly is false', () => {
        const node = { key: 'node-key' };
        const expandedKeys = [];
        const opts = { expandedOnly: false };
        expect(shouldSearchInChildren(node, expandedKeys, { key: 'key' }, opts)).toBe(true);
    });
});
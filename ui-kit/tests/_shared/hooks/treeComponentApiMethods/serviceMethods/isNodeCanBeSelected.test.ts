import { describe, it, expect } from 'vitest';
import { isNodeCanBeSelected } from '@src/_shared/hooks/treeComponentApiMethods/serviceMethods/isNodeCanBeSelected';

describe('isNodeCanBeSelected', () => {
    it('should return true if node is not disabled and selectable', () => {
        const node = { disabled: false, selectable: true };
        expect(isNodeCanBeSelected(node)).toBe(true);
    });

    it('should return false if node is disabled', () => {
        const node = { disabled: true, selectable: true };
        expect(isNodeCanBeSelected(node)).toBe(false);
    });

    it('should return false if node is not selectable', () => {
        const node = { disabled: false, selectable: false };
        expect(isNodeCanBeSelected(node)).toBe(false);
    });

    it('should return true if opts.notDisabled is false and node is disabled', () => {
        const node = { disabled: true, selectable: true };
        const opts = { notDisabled: false };
        expect(isNodeCanBeSelected(node, opts)).toBe(true);
    });

    it('should return true if opts.selectableOnly is false and node is not selectable', () => {
        const node = { disabled: false, selectable: false };
        const opts = { selectableOnly: false };
        expect(isNodeCanBeSelected(node, opts)).toBe(true);
    });
});
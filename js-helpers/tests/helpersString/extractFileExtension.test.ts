import { describe, it, expect } from 'vitest';
import { ExtractFileExtension } from '@src/helpersString/extractFileExtension';

describe('ExtractFileExtension', () => {
    it('should extract the extension from a normal file', () => {
        expect(ExtractFileExtension('example.txt')).toBe('.txt');
    });

    it('should extract the extension from a file with multiple dots', () => {
        expect(ExtractFileExtension('archive.tar.gz')).toBe('.gz');
    });

    it('should return an empty string if there is no extension', () => {
        expect(ExtractFileExtension('filewithoutextension')).toBe('');
    });

    it('should return an empty string for hidden files with no extension', () => {
        expect(ExtractFileExtension('.hiddenfile')).toBe('');
    });

    it('should return the extension for hidden files with extension', () => {
        expect(ExtractFileExtension('.hiddenfile.txt')).toBe('.txt');
    });
});
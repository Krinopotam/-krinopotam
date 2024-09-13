import { describe, it, expect } from 'vitest';
import { TrimFileExtension } from '@src/helpersString/trimFileExtension';

describe('TrimFileExtension', () => {
    it('should remove the file extension', () => {
        expect(TrimFileExtension('document.txt')).toBe('document');
        expect(TrimFileExtension('archive.tar.gz')).toBe('archive.tar');
        expect(TrimFileExtension('photo.jpeg')).toBe('photo');
    });

    it('should return the same name if there is no extension', () => {
        expect(TrimFileExtension('README')).toBe('README');
        expect(TrimFileExtension('LICENSE')).toBe('LICENSE');
    });

    it('should handle filenames with multiple dots correctly', () => {
        expect(TrimFileExtension('my.file.name.txt')).toBe('my.file.name');
    });

    it('should handle filenames with no name part', () => {
        expect(TrimFileExtension('.hiddenfile')).toBe('.hiddenfile');
    });

    it('should handle empty strings', () => {
        expect(TrimFileExtension('')).toBe('');
    });
});
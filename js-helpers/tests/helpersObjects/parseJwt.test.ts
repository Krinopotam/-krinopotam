import { describe, it, expect } from 'vitest';
import { ParseJwt } from '@src/helpersObjects/parseJwt';
import { JSDOM } from 'jsdom';

// Set up the jsdom environment
const { window } = new JSDOM('');
// noinspection JSConstantReassignment
global.window = window as any;

describe('ParseJwt', () => {
    it('should return a valid payload for a valid JWT token', () => {
        const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c';
        const payload = ParseJwt(token);
        expect(payload).toEqual({
            userId: '1234567890',
            name: 'John Doe',
            iat: 1516239022
        });
    });

    it('should return undefined for an invalid JWT token', () => {
        const token = 'invalid.token.value';
        const payload = ParseJwt(token);
        expect(payload).toBeUndefined();
    });

    it('should return undefined for an undefined token', () => {
        const payload = ParseJwt(undefined);
        expect(payload).toBeUndefined();
    });

    it('should return undefined for a token with invalid base64 encoding', () => {
        const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.invalid_base64_encoding.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c';
        const payload = ParseJwt(token);
        expect(payload).toBeUndefined();
    });
});
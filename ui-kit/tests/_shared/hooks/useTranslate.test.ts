// tests/hooks/useTranslate.test.ts
import { describe, it, expect } from 'vitest';
import { renderHook } from '@testing-library/react';
import { useTranslate } from '@src/_shared/hooks/useTranslate';
import {AnyType} from "@krinopotam/service-types";

describe('useTranslate Hook', () => {
    const translations = {
        en: { hello: 'Hello', world: 'World' },
        es: { hello: 'Hola', world: 'Mundo' },
    };

    it('should translate to English by default', () => {
        const { result } = renderHook(() => useTranslate('en', translations));
        expect(result.current('hello')).toBe('Hello');
        expect(result.current('world')).toBe('World');
    });

    it('should translate to Spanish', () => {
        const { result } = renderHook(() => useTranslate('es', translations));
        expect(result.current('hello')).toBe('Hola');
        expect(result.current('world')).toBe('Mundo');
    });

    it('should fallback to English if translation is missing', () => {
        const { result } = renderHook(() => useTranslate('fr' as AnyType, translations));
        expect(result.current('hello')).toBe('Hello');
        expect(result.current('world')).toBe('World');
    });

    it('should override translations with extraTranslation', () => {
        const extraTranslation = { hello: 'Bonjour' };
        const { result } = renderHook(() => useTranslate('fr' as AnyType, translations, extraTranslation));
        expect(result.current('hello')).toBe('Bonjour');
        expect(result.current('world')).toBe('World');
    });
});
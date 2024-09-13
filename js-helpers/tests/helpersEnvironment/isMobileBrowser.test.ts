import { describe, it, expect } from 'vitest';
import { isMobileBrowser } from '@src/helpersEnvironment/isMobileBrowser';
import { JSDOM } from 'jsdom';

//  userAgent mocking
const setUserAgent = (userAgent: string) => {
    Object.defineProperty(window.navigator, 'userAgent', {
        value: userAgent,
        writable: true,
        configurable: true,
    });
};

describe('isMobileBrowser', () => {
    const userAgents = {
        android: 'Mozilla/5.0 (Linux; U; Android 4.0.3; en-us; Nexus One Build/FRF91) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1',
        iphone: 'Mozilla/5.0 (iPhone; CPU iPhone OS 5_0 like Mac OS X) AppleWebKit/534.46 (KHTML, like Gecko) Version/5.1 Mobile/9A334 Safari/7534.48.3',
        ipad: 'Mozilla/5.0 (iPad; CPU OS 3_2 like Mac OS X) AppleWebKit/531.21.10 (KHTML, like Gecko) Version/4.0.4 Mobile/7B334b Safari/531.21.10',
        desktop: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
    };

    it('should detect Android user agent', () => {
        setUserAgent(userAgents.android);
        expect(isMobileBrowser()).toBe(true);
    });

    it('should detect iPhone user agent', () => {
        setUserAgent(userAgents.iphone);
        expect(isMobileBrowser()).toBe(true);
    });

    it('should detect iPad user agent', () => {
        setUserAgent(userAgents.ipad);
        expect(isMobileBrowser()).toBe(true);
    });

    it('should detect desktop user agent', () => {
        setUserAgent(userAgents.desktop);
        expect(isMobileBrowser()).toBe(false);
    });
});
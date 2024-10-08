/**
 * Parse JWT token
 * @param token
 * @constructor
 */
export declare const ParseJwt: <T extends Record<string, unknown>>(token: string | undefined) => T | undefined;

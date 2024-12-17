/**
 * Parse JWT token
 * @param token
 * @constructor
 */
export declare const ParseJwt: <T extends object = {
    [key: string]: unknown;
}>(token: string | undefined) => T | undefined;

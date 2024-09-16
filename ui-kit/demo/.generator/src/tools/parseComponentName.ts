export const parseComponentName = (source: string) => {
    const matcher = /export const ([A-Z]\w*)\s?=/g;
    const match = matcher.exec(source);
    return match?.[1] ?? '';
}
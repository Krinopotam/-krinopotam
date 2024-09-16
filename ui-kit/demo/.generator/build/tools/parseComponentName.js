export const parseComponentName = (source) => {
    const matcher = /export const ([A-Z]\w*)\s?=/g;
    const match = matcher.exec(source);
    return match?.[1] ?? '';
};

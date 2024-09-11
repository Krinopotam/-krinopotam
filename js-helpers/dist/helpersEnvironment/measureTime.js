export const measureTime = (name, fn) => {
    const start = performance.now();
    const result = fn();
    const end = performance.now();
    console.log(`${name} time: ${end - start} ms`);
    return result;
};

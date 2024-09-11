/** Measure time of function execution */
export const measureTime = <T>(name: string, fn: () => T): T => {
    const start = performance.now();
    const result = fn();
    const end = performance.now();
    console.log(`${name} time: ${end - start} ms`);
    return result;
}
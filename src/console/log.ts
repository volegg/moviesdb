export function consoleLog(...args: AnyType[]) {
    if (ENV.DEV) {
        // eslint-disable-next-line no-console
        console.log(...args);
    }
}

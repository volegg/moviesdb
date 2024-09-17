export function consoleWarn(...args: AnyType[]) {
    if (ENV.DEV) {
        // eslint-disable-next-line no-console
        console.warn(...args);
    }
}

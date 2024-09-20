import { ApplicationErrorName } from "src/error/errorName";

export function consoleError(...args: AnyType[]) {
    if (ENV.DEV) {
        // eslint-disable-next-line no-console
        console.error(ApplicationErrorName, "\n", ...args);
    }
}

import { ApplicationErrorName } from "src/error/errorName";

export function consoleError(...args: AnyType[]) {
    // eslint-disable-next-line no-console
    console.error(ApplicationErrorName, "\n", ...args);
}

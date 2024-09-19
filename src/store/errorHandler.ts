import { consoleError } from "src/console/error";

export function createErrorHandler(): ApiErrorCallback {
    return (err, endpoint) => {
        consoleError(`Error endpoint: ${endpoint}\n${err.toString()}`);
    };
}

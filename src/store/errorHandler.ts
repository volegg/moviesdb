import { consoleError } from "src/console/error";
import { ApplicationError } from "src/error/ApplicationError";

export function createErrorHandler(): ApiErrorCallback {
    return (err, endpoint) => {
        consoleError(new ApplicationError(`Error endpoint: ${endpoint}\n${err.toString()}`));
    };
}

import { consoleError } from "src/console/error";
import { consoleLog } from "src/console/log";

import type { Dispatch, State } from "./store";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function createResponseHandler(_getState: () => State, _dispatch: Dispatch): ApiCallback {
    return (err, response) => {
        if (err) {
            consoleError(err);
            return;
        }

        consoleLog(response);
    };
}

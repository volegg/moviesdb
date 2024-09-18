import { consoleLog } from "src/console/log";
import { ApiEndpoint } from "src/transport/const";

import { moviePopularSlice } from "./reducers/moviePopular";
import type { Dispatch, State } from "./store";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function createResponseHandler(_getState: () => State, dispatch: Dispatch): ApiCallback {
    return (response) => {
        if (isMoviePopularResponse(response)) {
            const data: MoviePopular[] = response.payload.results.map((popular) => {
                return {
                    title: popular.title,
                    image: "https://media.themoviedb.org/t/p/w220_and_h330_face" + popular.poster_path,
                    year: +popular.release_date.substring(0, 4),
                };
            });

            dispatch(moviePopularSlice.actions.update(data));
            return;
        }

        consoleLog(response);
    };
}

function isMoviePopularResponse(response: TransportResponse): response is MoviePopularResponse {
    return ApiEndpoint.moviePopular === response.type;
}

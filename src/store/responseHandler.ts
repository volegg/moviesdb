import { ApiEndpoint } from "src/transport/const";
import { serverMovieToUi } from "src/utils/adapters/serverMovieToUi";

import { movieGenresSlice } from "./reducers/movieGenres";
import { moviePopularSlice } from "./reducers/moviePopular";
import { movieSearchSlice } from "./reducers/movieSearch";
import { movieTopRatedSlice } from "./reducers/movieTopRated";
import { notificationSlice } from "./reducers/notifications";
import type { Dispatch } from "./store";

export function createResponseHandler(dispatch: Dispatch): ApiCallback {
    return (response) => {
        if (isMovieGenresResponse(response)) {
            dispatch(movieGenresSlice.actions.update(response.payload.genres));
            return;
        }

        if (isMoviePopularResponse(response)) {
            const data: Movie[] = response.payload.results.map(serverMovieToUi);

            dispatch(moviePopularSlice.actions.update(data));

            return;
        }

        if (isMovieTopRatedResponse(response)) {
            const data: Movie[] = response.payload.results.map(serverMovieToUi);

            dispatch(movieTopRatedSlice.actions.update(data));
            return;
        }

        if (isMovieSearchResponse(response)) {
            if (response.payload.total_results > 0) {
                const data: Movie[] = response.payload.results.map(serverMovieToUi);

                dispatch(
                    movieSearchSlice.actions.update({
                        page: response.payload.page,
                        totalPages: response.payload.total_pages,
                        totalMovies: response.payload.total_results,
                        list: data,
                    }),
                );
            } else {
                dispatch(notificationSlice.actions.add("Unknown movie title, nothing found"));
            }
            return;
        }
    };
}

function isMoviePopularResponse(response: TransportResponse): response is MoviePopularResponse {
    return ApiEndpoint.moviePopular === response.type;
}

function isMovieSearchResponse(response: TransportResponse): response is MovieSearchResponse {
    return ApiEndpoint.searchMovie === response.type;
}

function isMovieTopRatedResponse(response: TransportResponse): response is MovieTopRatedResponse {
    return ApiEndpoint.topRated === response.type;
}

function isMovieGenresResponse(response: TransportResponse): response is MovieGenresResponse {
    return ApiEndpoint.genereMovieList === response.type;
}

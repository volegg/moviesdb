import { consoleLog } from "src/console/log";
import { ApiEndpoint } from "src/transport/const";
import { getTopMovie } from "src/utils/adapters/getTopMovie";

import { moviePopularSlice } from "./reducers/moviePopular";
import { movieSearchSlice } from "./reducers/movieSearch";
import { movieTopRatedSlice } from "./reducers/movieTopRated";
import type { Dispatch, State } from "./store";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function createResponseHandler(_getState: () => State, dispatch: Dispatch): ApiCallback {
    return (response) => {
        if (isMoviePopularResponse(response)) {
            const data: MoviePopular[] = response.payload.results.map(getTopMovie);

            dispatch(moviePopularSlice.actions.update(data));
            return;
        }

        if (isMovieTopRatedResponse(response)) {
            const data: MoviePopular[] = response.payload.results.map(getTopMovie);

            dispatch(movieTopRatedSlice.actions.update(data));
            return;
        }

        if (isMovieSearchResponse(response)) {
            const data: MovieSearch[] = response.payload.results.map((movie) => {
                return {
                    title: movie.title,
                    image: "https://media.themoviedb.org/t/p/w220_and_h330_face" + movie.poster_path,
                    date: movie.release_date,
                    rating: ((movie.vote_average * 10) >> 0) / 10,
                    lang: movie.original_language,
                    genreIds: movie.genre_ids,
                };
            });

            dispatch(
                movieSearchSlice.actions.update({
                    page: response.payload.page,
                    totalPages: response.payload.total_pages,
                    totalMovies: response.payload.total_results,
                    list: data,
                }),
            );
            return;
        }

        consoleLog(response);
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

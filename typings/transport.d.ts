type MovieSearchEndpoint = 1;
type MovieGenresEndpoint = 2;
type MoviePopularEndpoint = 3;

type ApiEndpoints = MovieSearchEndpoint | MovieGenresEndpoint | MoviePopularEndpoint;

type ApiPayload = AnyType;

type Payload<TResults> = {
    page: number;
    results: TResults;
    total_pages: number;
    total_results: number;
};

type MovieSearchResponse = {
    type: MovieSearchEndpoint;
    payload: Payload<{
        backdrop_path: string;
        genre_ids: number[];
        id: number;
        original_language: string;
    }>;
};

type MovieGenresResponse = {
    type: MovieGenresEndpoint;
    payload: {
        genres: Array<{
            id: number;
            name: string;
        }>;
    };
};

type MoviePopularResponse = {
    type: MoviePopularEndpoint;
    payload: Payload<
        Array<{
            poster_path: string;
            title: string;
            release_date: string;
        }>
    >;
};

type TransportResponse = MoviePopularResponse | MovieGenresResponse | MovieSearchResponse;

type ApiCallback = (response: TransportResponse) => void;
type ApiErrorCallback = (ex: Error, endpoint: ApiEndpoints) => void;

interface ITransport {
    setResponseHandler(rh: ApiCallback);
    setErrorHandler(rh: ApiErrorCallback);

    searchMovieApi(name: string): Promise<void>;
    genreListApi(): Promise<void>;
    moviePopular(page: number): Promise<void>;
}

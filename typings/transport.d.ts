type MovieSearchEndpoint = 1;
type MoviePopularEndpoint = 2;
type MovieGenresEndpoint = 3;
type MovieTopRatedEndpoint = 4;

type ApiEndpoints = MovieSearchEndpoint | MovieGenresEndpoint | MoviePopularEndpoint | MovieTopRatedEndpoint;

type ApiPayload = AnyType;

type ServerGenreProps = {
    id: number;
    name: string;
};

type ServerMovieProps = {
    genre_ids: number[];
    id: number;
    title: string;
    original_title: string;
    original_language: string;
    vote_average: number;
    release_date: string;
    poster_path: string;
    backdrop_path: string;
    overview: string;
};

type Payload<TResults> = {
    page: number;
    results: TResults;
    total_pages: number;
    total_results: number;
};

type MovieSearchResponse = {
    type: MovieSearchEndpoint;
    payload: Payload<ServerMovieProps[]>;
};

type MovieGenresResponse = {
    type: MovieGenresEndpoint;
    payload: {
        genres: ServerGenreProps[];
    };
};

type MoviePopularResponse = {
    type: MoviePopularEndpoint;
    payload: Payload<Array<ServerMovieProps>>;
};

type MovieTopRatedResponse = {
    type: MovieTopRatedEndpoint;
    payload: Payload<ServerMovieProps[]>;
};

type TransportResponse = MoviePopularResponse | MovieGenresResponse | MovieSearchResponse | MovieTopRatedResponse;

type ApiCallback = (response: TransportResponse) => void;
type ApiErrorCallback = (ex: Error, endpoint: ApiEndpoints) => void;

type SearchMovieParams = {
    query: string;
    page: number;
    userPage?: number;
};

interface ITransport {
    setResponseHandler(rh: ApiCallback);
    setErrorHandler(rh: ApiErrorCallback);

    setApiKey(key: string): void;

    searchMovieApi(params: SearchMovieParams): Promise<void>;
    genreListApi(): Promise<void>;
    moviePopularApi(page: number): Promise<void>;
    topRatedApi(page: number): Promise<void>;
}

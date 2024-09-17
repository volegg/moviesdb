type ApiEndpoints = 1 | 2;

type ApiPayload = AnyType;

type TransportResponse = { type: ApiEndpoints; payload: ApiPayload };

type ApiCallback = (err: Error | null, response: TransportResponse) => void;

interface ITransport {
    setResponseHandler(rh: ApiCallback);

    searchMovieApi(name: string): void;
    genreListApi(): void;
}

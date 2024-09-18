import { api } from "./api";
import { ApiEndpoint } from "./const";

export class Transport implements ITransport {
    private _responseHandler: ApiCallback = () => {
        throw new Error("Transport Error. Set response handler before call. See Tranport.setResponseHandler");
    };

    private _errorHandler: ApiErrorCallback = () => {
        throw new Error("Transport Error. Set error handler before call. See Tranport.setErrorHandler");
    };

    setResponseHandler(callback: ApiCallback) {
        this._responseHandler = callback;
    }
    setErrorHandler(callback: ApiErrorCallback) {
        this._errorHandler = callback;
    }

    searchMovieApi(name: string) {
        return this.wrapper(ApiEndpoint.searchMovie, api.searchMovie({ query: name }));
    }

    genreListApi() {
        return this.wrapper(ApiEndpoint.genereMovieList, api.genreMovieList());
    }

    moviePopular(page = 1) {
        return this.wrapper(ApiEndpoint.moviePopular, api.moviePopular({ page }));
    }

    private wrapper(endpoint: ApiEndpoints, deferred: Promise<ApiPayload>) {
        return deferred
            .then((payload) => {
                this._responseHandler({
                    type: endpoint,
                    payload,
                });
            })
            .catch((ex) => {
                this._errorHandler(ex, endpoint);
            });
    }
}

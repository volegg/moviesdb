import { api } from "./api";
import { ApiEndpoint } from "./const";

export class Transport implements ITransport {
    private _responseHandler: ApiCallback = () => {
        throw new Error("Transport Error. Set response handler before call. See Tranport.setResponseHandler");
    };

    init() {
        return true;
    }

    setResponseHandler(rh: ApiCallback) {
        this._responseHandler = rh;
    }

    searchMovieApi(name: string) {
        this.wrapper(ApiEndpoint.searchMovie, api.searchMovie({ query: name }));
    }

    genreListApi() {
        this.wrapper(ApiEndpoint.genereMovieList, api.genreMovieList());
    }

    private wrapper(endpoint: ApiEndpoints, deferred: Promise<ApiPayload>) {
        deferred
            .then((payload) => {
                this._responseHandler(null, {
                    type: endpoint,
                    payload,
                });
            })
            .catch((ex) => {
                this._responseHandler(ex, { type: endpoint, payload: "error" });
            });
    }
}

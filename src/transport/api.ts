let api_key = "";
const baseUri = "https://api.themoviedb.org/3";

export const api = {
    setApiKey(key: string) {
        api_key = key;
    },
    searchMovie: createHttp("/search/movie"),
    genreMovieList: createHttp("/genre/movie/list"),
    moviePopular: createHttp("/movie/popular"),
    topRated: createHttp("/movie/top_rated"),
    movieById: <TRet>(id: number) => createHttp("/movie/" + id)() as Promise<TRet>,
};

function createHttp(path: string, method = "GET") {
    return <TParams extends Object>(params?: TParams) => {
        let body: string;
        let query: string;

        return new Promise((resolve, reject) => {
            try {
                if (method === "GET" && params) {
                    query = Object.entries(params).reduce((q, [key, value]) => {
                        if (value !== null && value !== undefined) {
                            q += `&${key}=${value.toString()}`;
                        }

                        return q;
                    }, "");
                } else if (method === "POST" && params) {
                    body = JSON.stringify(params);
                }
            } catch (ex) {
                reject(ex);
                return;
            }

            fetch(`${baseUri}${path}?api_key=${api_key}${query ? query : ""}`, {
                method,
                body,
                headers: {
                    "Content-Type": "application/json",
                },
            })
                .then((response) => {
                    if (response.status === 200) {
                        try {
                            response.text().then((text) => {
                                if (text.toLowerCase() === "ok") {
                                    resolve({});
                                } else {
                                    try {
                                        resolve(JSON.parse(text));
                                    } catch (ex) {
                                        reject(ex);
                                    }
                                }
                            });
                        } catch (ex) {
                            reject(ex);
                        }

                        return;
                    }

                    reject(response.status);
                })
                .catch(reject);
        });
    };
}

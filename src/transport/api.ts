import { ApplicationError } from "src/error/ApplicationError";

const api_key = "17e3316343c81635a33bb19501cbc15b";
const baseUri = "https://api.themoviedb.org/3";

export const api = {
    searchMovie: createHttp("/search/movie"),
    genreMovieList: createHttp("/genre/movie/list"),
    moviePopular: createHttp("/movie/popular"),
};

function createHttp(path: string, method = "GET") {
    return <TParams extends Object>(params?: TParams) => {
        let body: string;
        let query: string;

        if (method === "GET" && params) {
            query = Object.entries(params).reduce((q, [key, value]) => {
                q += `${key}=${value.toString()}`;

                return q;
            }, "&");
        } else if (method === "POST" && params) {
            body = JSON.stringify(params);
        }

        return new Promise((resolve, reject) => {
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

                    reject(new ApplicationError(response.statusText));
                })
                .catch(reject);
        });
    };
}

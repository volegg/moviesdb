import { getPosterUrl } from "./posterUrl";

export function serverMovieToUi(movie: ServerMovieProps): Movie {
    return {
        id: movie.id,
        title: movie.title,
        image: getPosterUrl(movie),
        date: movie.release_date,
        rating: ((movie.vote_average * 10) >> 0) / 10,
        lang: movie.original_language,
        genreIds: movie.genre_ids,
        overview: movie.overview,
    };
}

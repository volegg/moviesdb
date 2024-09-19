const prefixMovieDbUrl = "https://media.themoviedb.org/t/p/w220_and_h330_face";

export function serverMovieToUi(movie: ServerMovieProps): Movie {
    return {
        title: movie.title,
        image: prefixMovieDbUrl + movie.poster_path,
        date: movie.release_date,
        rating: ((movie.vote_average * 10) >> 0) / 10,
        lang: movie.original_language,
        genreIds: movie.genre_ids,
        overview: movie.overview,
    };
}

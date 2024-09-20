const prefixMovieDbUrl = "https://media.themoviedb.org/t/p/w220_and_h330_face";

export function serverMovieToUi(movie: ServerMovieProps): Movie {
    const posterPath = movie.poster_path ? movie.poster_path : movie.backdrop_path;

    return {
        id: movie.id,
        title: movie.title,
        image: posterPath ? prefixMovieDbUrl + posterPath : "emptyPoster.jpeg",
        date: movie.release_date,
        rating: ((movie.vote_average * 10) >> 0) / 10,
        lang: movie.original_language,
        genreIds: movie.genre_ids,
        overview: movie.overview,
    };
}

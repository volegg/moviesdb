export function getTopMovie(movie: MovieFields) {
    return {
        title: movie.title,
        image: "https://media.themoviedb.org/t/p/w220_and_h330_face" + movie.poster_path,
        date: movie.release_date,
        rating: ((movie.vote_average * 10) >> 0) / 10,
    };
}

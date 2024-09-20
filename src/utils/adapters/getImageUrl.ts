export function getImageUrl(pathname: string) {
    const prefixMovieDbUrl = "https://media.themoviedb.org/t/p/w220_and_h330_face";

    return prefixMovieDbUrl + (pathname[0] === "/" ? pathname : "/" + pathname);
}

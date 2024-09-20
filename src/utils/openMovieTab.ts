export function openMovieTab(movieId: number) {
    window.open(window.location.pathname + "?pageMovie=" + movieId, "_blank");
}

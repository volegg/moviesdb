import { getImageUrl } from "./getImageUrl";

type PosterUrlProps = {
    poster_path: string;
    backdrop_path: string;
};

export function getPosterUrl(props: PosterUrlProps): string {
    const posterPath = props.poster_path ? props.poster_path : props.backdrop_path;

    return posterPath ? getImageUrl(posterPath) : "emptyPoster.jpeg";
}

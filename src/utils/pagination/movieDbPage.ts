import { MovieDB } from "src/const/moviedb";

export function getMovieDbPage(page: number, pageSize: number) {
    return ((((page - 1) * pageSize) / MovieDB.pageSize) >> 0) + 1;
}

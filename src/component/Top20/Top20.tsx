import { createMovieByTop } from "src/factory/movieByTop";
import { selectTopRatedMovies } from "src/store/selectors/topRatedMovie";

import style from "./style.pcss";

export const Top20 = createMovieByTop("Top", selectTopRatedMovies, style);

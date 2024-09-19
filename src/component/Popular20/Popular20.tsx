import { createMovieByTop } from "src/factory/movieByTop";
import { selectPopularMovies } from "src/store/selectors/popularMovies";

import style from "./style.pcss";

export const Popular20 = createMovieByTop("Popular", selectPopularMovies, style);

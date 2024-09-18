import { createMovie20 } from "src/factory/movie20";
import { selectPopularMovies } from "src/store/selectors/popularMovies";

import style from "./style.pcss";

export const Popular20 = createMovie20("Popular", selectPopularMovies, style);

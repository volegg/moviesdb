import { createMovie20 } from "src/factory/movie20";
import { selectTopRatedMovies } from "src/store/selectors/topRatedMovie";

import style from "./style.pcss";

export const Top20 = createMovie20("Top", selectTopRatedMovies, style);

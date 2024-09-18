import * as React from "react";
import { useSelector } from "react-redux";

import { Panel } from "src/entity/Panel/Panel";
import { Poster } from "src/entity/Poster/Poster";
import { selectPopularMovies } from "src/store/moviePopularSelectors/selector";

import style from "./style.pcss";

export function MoviePopular() {
    const posters = useSelector(selectPopularMovies);

    return (
        <Panel title={"TOP " + posters.length}>
            <div className={style.root}>
                {posters.map((item, i) => {
                    return <Poster key={item.title + "-" + i} {...item} width={110} height={165} />;
                })}
            </div>
        </Panel>
    );
}

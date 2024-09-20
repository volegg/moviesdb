import * as React from "react";

import { MovieField } from "../MovieField/MovieField";

import style from "./style.pcss";

export function MovieOverview({ overview }: { overview: string }) {
    return (
        <div className={style.root}>
            <MovieField label="OVERVIEW" info={overview} />
        </div>
    );
}

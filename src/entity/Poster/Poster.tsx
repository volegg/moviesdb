import * as React from "react";

import style from "./style.pcss";

type PosterProps = {
    image: string;
    title: string;
    year: number;
    width?: number;
    height?: number;
};

export function Poster({ image, title, year, width = 220, height = 330 }: PosterProps) {
    return (
        <div className={style.root}>
            <img className={style.poster} width={width} height={height} src={image} />
            <div className={style.title}>{title}</div>
            <div className={style.year}>{year}</div>
        </div>
    );
}

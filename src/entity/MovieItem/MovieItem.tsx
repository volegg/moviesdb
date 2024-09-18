import * as React from "react";

import { RatingItem } from "../RatingItem/RatingItem";

import style from "./style.pcss";

type MovieItemProps = {
    rating: number;
    title: string;
    image: string;
    date: string;
    lang: string;
    genres: string;
};

export function MovieItem(props: MovieItemProps) {
    return (
        <div className={style.root}>
            <div className={style.poster} style={{ backgroundImage: "url(" + props.image + ")" }}></div>
            <div>{props.title}</div>
            <div className={style.rating}>
                <RatingItem value={props.rating} />
            </div>
            <div>{props.date}</div>
            <div>{props.genres}</div>
            <div>{props.lang}</div>
        </div>
    );
}

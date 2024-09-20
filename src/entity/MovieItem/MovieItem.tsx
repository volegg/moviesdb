import * as React from "react";

import { RatingItem } from "../RatingItem/RatingItem";

import style from "./style.pcss";

type MovieItemProps = {
    id: number;
    rating: number;
    title: string;
    image: string;
    date: string;
    lang: string;
    genres: string;
    onClick(id: number): void;
};

export function MovieItem(props: MovieItemProps) {
    return (
        <div className={style.root} onClick={() => props.onClick(props.id)}>
            <div className={style.poster} style={{ backgroundImage: "url(" + props.image + ")" }}></div>
            <div>{props.title}</div>
            <RatingItem value={props.rating} />
            <div>{props.lang.toUpperCase()}</div>
            <div>{props.date}</div>
            <div>{props.genres}</div>
        </div>
    );
}

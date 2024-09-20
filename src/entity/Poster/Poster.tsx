import * as React from "react";

import { RatingItem } from "../RatingItem/RatingItem";

import style from "./style.pcss";

type PosterProps = Omit<Movie, "lang" | "overview" | "genreIds"> & {
    width?: number;
    height?: number;
    genre?: string;
    onClick(id: number): void;
};

export function Poster({ onClick, id, rating, image, title, date, width = 6, height = 10, genre }: PosterProps) {
    return (
        <div className={style.root} onClick={() => onClick(id)}>
            <img className={style.poster} style={{ width: width + "em", height: height + "em" }} src={image} />
            <div className={style.title}>{title}</div>
            <div className={style.bottom}>
                <RatingItem value={rating} />
                {genre ? <div>{genre}</div> : null}
                <div>{date}</div>
            </div>
        </div>
    );
}

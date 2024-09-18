import type { ChangeEvent } from "react";
import * as React from "react";

import { consoleLog } from "src/console/log";
import { consoleWarn } from "src/console/warn";

import { Button } from "../Button/Button";
import { InputBox } from "../InputBox/InputBox";
import { MovieItem } from "../MovieItem/MovieItem";
import { Panel } from "../Panel/Panel";
import { Poster } from "../Poster/Poster";
import { SearchBox } from "../SearchBox/SearchBox";

import style from "./style.pcss";

export function Entities() {
    const imgSrc = "https://cdn.pixabay.com/photo/2023/01/26/22/14/ai-generated-7747165_640.jpg";

    return (
        <div className={style.root}>
            <div>
                <InputBox placeholder="INPUT" onChange={onChange} onEnter={onEnter} />
            </div>
            <hr></hr>
            <div>
                <SearchBox placeholder="Search movies" onChange={onChange} onEnter={onEnter} />
            </div>
            <hr></hr>
            <div>
                <Button onClick={onClick}>Primary Button</Button>
            </div>
            <hr></hr>
            <div>
                <Panel>
                    <div className={style.search}>
                        <SearchBox placeholder="Search movies" onChange={onChange} onEnter={onEnter} />
                        <Button onClick={onClick}>Search</Button>
                    </div>
                </Panel>
            </div>
            <hr></hr>
            <div>
                <Poster rating={1} title="movie" date="2024-01-01" image={imgSrc} />
                <Poster rating={5} title="movie" date="2024-01-01" image={imgSrc} />
                <Poster rating={8} title="movie" date="2024-01-01" image={imgSrc} />
                <Poster rating={9.5} title="movie" date="2024-01-01" image={imgSrc} />
            </div>
            <hr></hr>
            <div>
                <MovieItem
                    genres="Action, Triller"
                    image={imgSrc}
                    lang="en"
                    title="Title1"
                    date="2024-02-01"
                    rating={4}
                />
                <MovieItem genres="War" image={imgSrc} lang="de" title="Title2" date="2024-03-02" rating={7} />
                <MovieItem
                    genres="Comedy, Action"
                    image={imgSrc}
                    lang="fr"
                    title="Title3"
                    date="2024-02-08"
                    rating={10}
                />
            </div>
        </div>
    );

    function onClick() {
        consoleLog("Button clicked");
    }

    function onChange(e: ChangeEvent<HTMLInputElement>) {
        consoleLog(e.target.value);
    }

    function onEnter(value: string) {
        consoleWarn(value);
    }
}

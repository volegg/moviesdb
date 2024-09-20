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
            <h1>InputBox</h1>
            <div>
                <InputBox placeholder="INPUT" onChange={onChange} onEnter={onEnter} />
            </div>
            <hr></hr>
            <h1>SearchBox</h1>
            <div>
                <SearchBox placeholder="Search movies" onChange={onChange} onEnter={onEnter} />
            </div>
            <hr></hr>
            <h1>Button</h1>
            <div>
                <Button onClick={onClick}>Primary Button</Button>
            </div>
            <hr></hr>
            <h1>Panel</h1>
            <div>
                <Panel>
                    <div className={style.search}>
                        <SearchBox placeholder="Search movies" onChange={onChange} onEnter={onEnter} />
                        <Button onClick={onClick}>Search</Button>
                    </div>
                </Panel>
            </div>
            <hr></hr>
            <h1>Poster</h1>
            <div>
                <Poster id={10} rating={0} title="" date="" image={imgSrc} onClick={onClick} />
                <Poster id={20} rating={1} title="movie" date="2024-01-01" image={imgSrc} onClick={onClick} />
                <Poster
                    id={30}
                    rating={5}
                    title="movie"
                    genre="Action"
                    date="2024-01-01"
                    image={imgSrc}
                    onClick={onClick}
                />
                <Poster id={40} rating={8} title="movie" date="2024-01-01" image={imgSrc} onClick={onClick} />
                <Poster
                    id={50}
                    rating={9.5}
                    genre="genre"
                    title="movie"
                    date=""
                    image={imgSrc}
                    width={100}
                    onClick={onClick}
                />
            </div>
            <hr></hr>
            <h1>MovieItem</h1>
            <div>
                <MovieItem
                    id={10}
                    onClick={onClick}
                    genres="Action, Triller"
                    image={imgSrc}
                    lang="en"
                    title="Title1"
                    date="2024-02-01"
                    rating={4}
                />
                <MovieItem
                    id={20}
                    onClick={onClick}
                    genres="War"
                    image={imgSrc}
                    lang="de"
                    title="Title2"
                    date="2024-03-02"
                    rating={7}
                />
                <MovieItem
                    id={40}
                    onClick={onClick}
                    genres="Comedy, Action"
                    image={imgSrc}
                    lang="fr"
                    title="Title3"
                    date="2024-02-08"
                    rating={10}
                />
                <MovieItem
                    id={50}
                    onClick={onClick}
                    genres=""
                    image={imgSrc}
                    lang=""
                    title="ISSUE"
                    date=""
                    rating={0}
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

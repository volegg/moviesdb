import type { ChangeEvent } from "react";
import * as React from "react";
import { useEffect, useRef, useState } from "react";

import { Button } from "src/entity/Button/Button";
import { SearchBox } from "src/entity/SearchBox/SearchBox";
import { queryParam } from "src/queryString/parseQueryString";
import { updateQueryParam } from "src/queryString/updateQueryValue";
import { searchMovieByPageAction } from "src/store/actions/searchMovieByPageAction";
import { useDispatch, useSelector } from "src/store/hooks";
import { selectPending } from "src/store/selectors/searchMovies";

import style from "./style.pcss";

export function Search() {
    const dispatch = useDispatch();
    const [movieTitle, setMovieTitle] = useState(queryParam.title || "");
    const moviesPending = useSelector(selectPending);
    const hasSearchFromQuery = useRef(false);

    useEffect(() => {
        if (!hasSearchFromQuery.current && movieTitle) {
            hasSearchFromQuery.current = true;
            doSearch(queryParam.page);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className={style.root}>
            <SearchBox value={movieTitle} placeholder="Search movies" onEnter={onEnter} onChange={onChange} />
            <Button onClick={onClick}>Search</Button>
        </div>
    );

    function onChange({ currentTarget }: ChangeEvent<HTMLInputElement>) {
        const { value } = currentTarget;

        setMovieTitle(() => value);

        if (!value) {
            updateQueryParam("title", "");
        }
    }

    function onClick() {
        doSearch(1);
    }

    function onEnter(title: string) {
        setMovieTitle(() => title);
        doSearch(1);
    }

    function doSearch(page: number) {
        if (moviesPending || !movieTitle) {
            return;
        }

        dispatch(searchMovieByPageAction({ query: movieTitle, page }));
    }
}

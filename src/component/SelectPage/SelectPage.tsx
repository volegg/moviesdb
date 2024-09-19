import * as React from "react";
import cn from "classnames";

import { Button } from "src/entity/Button/Button";
import { searchMovieByPageAction } from "src/store/actions/searchMovieByPageAction";
import { selectUserPages } from "src/store/featureSelectors/paginationSelectors";
import { useDispatch, useSelector } from "src/store/hooks";
import { selectMovieTitle, selectPending, selectTotalPages, selectUserPage } from "src/store/selectors/searchMovies";

import style from "./style.pcss";

export function SelectPage() {
    const dispatch = useDispatch();
    const moviesPending = useSelector(selectPending);
    const movieTitle = useSelector(selectMovieTitle);
    const selectedPage = useSelector(selectUserPage);
    const pages = useSelector(selectUserPages);
    const totalPages = useSelector(selectTotalPages);

    return (
        <div className={style.root}>
            <Button onClick={onClickFirst}>1</Button>
            <Button onClick={onClickPrev}>Prev</Button>
            <div className={style.numContainer}>
                {pages.map((num, i) => {
                    return (
                        <div
                            className={cn(style.pageNum, num === selectedPage ? style.selected : "")}
                            key={num + "_" + i}
                        >
                            {num}
                        </div>
                    );
                })}
            </div>
            <Button onClick={onClickNext}>Next</Button>
            <Button onClick={onClickLast}>{totalPages}</Button>
        </div>
    );

    function onClickFirst() {
        doSearch(1);
    }

    function onClickPrev() {
        doSearch(selectedPage - 1);
    }

    function onClickNext() {
        doSearch(selectedPage + 1);
    }

    function onClickLast() {
        doSearch(totalPages);
    }

    function doSearch(page: number) {
        if (moviesPending) {
            return;
        }

        dispatch(searchMovieByPageAction({ query: movieTitle, page }));
    }
}

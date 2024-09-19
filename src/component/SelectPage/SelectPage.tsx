import * as React from "react";
import cn from "classnames";

import { Button } from "src/entity/Button/Button";
import { searchMovieAction } from "src/store/actions/movieSearchAction";
import {
    selectCurrentPage,
    selectCurrentTotalPage,
    selectUserPages,
} from "src/store/featureSelectors/paginationSelectors";
import { useDispatch, useSelector } from "src/store/hooks";
import { selectMovieTitle, selectPending } from "src/store/selectors/searchMovies";

import style from "./style.pcss";

export function SelectPage() {
    const dispatch = useDispatch();
    const moviesPending = useSelector(selectPending);
    const movieTitle = useSelector(selectMovieTitle);
    const selectedPage = useSelector(selectCurrentPage);
    const pages = useSelector(selectUserPages);
    const totalPages = useSelector(selectCurrentTotalPage);

    return (
        <div className={style.root}>
            <Button onClick={onClickFirst}>First</Button>
            <Button onClick={onClickFirst}>Prev</Button>
            {pages.map((num, i) => {
                return (
                    <div className={cn(style.pageNum, num === selectedPage ? style.selected : "")} key={num + "_" + i}>
                        {num}
                    </div>
                );
            })}
            <Button onClick={onClickFirst}>Next</Button>
            <Button onClick={onClickLast}>Last</Button>
        </div>
    );

    function onClickFirst() {
        doSearch(1);
    }

    function onClickLast() {
        doSearch((totalPages >> 1) - 1);
    }

    function doSearch(page: number) {
        if (moviesPending) {
            return;
        }

        const query = movieTitle.trim().replace(/\s+/g, " ");

        dispatch(searchMovieAction({ query, page }));
    }
}

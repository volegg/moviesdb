import * as React from "react";
import cn from "classnames";

import { Button } from "src/entity/Button/Button";
import { searchMovieByPageAction } from "src/store/actions/searchMovieByPageAction";
import {
    selectCurrentUserPage,
    selectTotalPages,
    selectUserPages,
} from "src/store/featureSelectors/paginationSelectors";
import { useDispatch, useSelector } from "src/store/hooks";
import { selectMovieTitle, selectPending } from "src/store/selectors/searchMovies";

import style from "./style.pcss";

export function SelectPageMobile({ order = 0 }: { order?: 0 | 1 }) {
    const dispatch = useDispatch();
    const moviesPending = useSelector(selectPending);
    const movieTitle = useSelector(selectMovieTitle);
    const selectedPage = useSelector(selectCurrentUserPage);
    const pages = useSelector(selectUserPages);
    const totalPages = useSelector(selectTotalPages);

    return (
        <div className={cn(style.root, { [style.reverse]: order })}>
            <div className={cn(style.buttons, { [style.reverse]: order })}>
                <Button onClick={onClickFirst}>1</Button>
                <Button onClick={onClickPrev}>Prev</Button>
                <Button onClick={onClickNext}>Next</Button>
                <Button onClick={onClickLast}>{totalPages}</Button>
            </div>

            <div className={cn(style.numContainer, { [style.reverse]: order })}>
                {pages.map((num, i) => {
                    return (
                        <div
                            className={cn(style.pageNum, num === selectedPage ? style.selected : "")}
                            key={num + "_" + i}
                            onClick={createSelectPage(num)}
                        >
                            {num}
                        </div>
                    );
                })}
            </div>
        </div>
    );

    function createSelectPage(pageNum: number) {
        return () => {
            doSearch(pageNum);
        };
    }

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
        if (moviesPending || page < 1 || page > totalPages) {
            return;
        }

        dispatch(searchMovieByPageAction({ query: movieTitle, page }));
    }
}

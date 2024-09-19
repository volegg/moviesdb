import * as React from "react";
import { useCallback, useEffect, useRef } from "react";
import { fa0, fa1, fa2, fa4, fa5, faBan, faBars, faGrip, faStar, faT } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { PageSize, SortPerPage, View } from "src/const/pagination";
import { queryParam } from "src/queryString/parseQueryString";
import { updateQueryParam } from "src/queryString/updateQueryValue";
import { useDispatch, useSelector } from "src/store/hooks";
import { settingsSlice } from "src/store/reducers/settings";
import { selectPageSize, selectSortPerPage, selectView } from "src/store/selectors/settings";

import style from "./style.pcss";

export function Settings() {
    const dispatch = useDispatch();
    const pageSize = useSelector(selectPageSize);
    const view = useSelector(selectView);
    const sort = useSelector(selectSortPerPage);
    const wasUpdated = useRef(false);

    useEffect(() => {
        if (!wasUpdated.current) {
            wasUpdated.current = true;

            setView(queryParam.view);
            setPageSize(queryParam.pageSize);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const onPageSizeFour = useCallback(createOnClickPageSize(PageSize.four), []);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const onPageSizeFive = useCallback(createOnClickPageSize(PageSize.five), []);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const onPageSizeTen = useCallback(createOnClickPageSize(PageSize.ten), []);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const onPageSizeMax = useCallback(createOnClickPageSize(PageSize.max), []);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const onViewList = useCallback(createOnClickView(View.list), []);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const onViewTile = useCallback(createOnClickView(View.tile), []);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const onNoneSort = useCallback(createOnClickSort(SortPerPage.none), []);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const onRankSort = useCallback(createOnClickSort(SortPerPage.byRank), []);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const onTitleSort = useCallback(createOnClickSort(SortPerPage.byTitle), []);

    return (
        <div className={style.root}>
            <div></div>
            <div className={view === View.list ? style.selected : style.item} onClick={onViewList}>
                <FontAwesomeIcon icon={faBars} />
            </div>
            <div className={view === View.tile ? style.selected : style.item} onClick={onViewTile}>
                <FontAwesomeIcon icon={faGrip} />
            </div>
            <div className={pageSize === PageSize.four ? style.selected : style.item} onClick={onPageSizeFour}>
                <FontAwesomeIcon icon={fa4} />
            </div>
            <div className={pageSize === PageSize.five ? style.selected : style.item} onClick={onPageSizeFive}>
                <FontAwesomeIcon icon={fa5} />
            </div>
            <div className={pageSize === PageSize.ten ? style.selected : style.item} onClick={onPageSizeTen}>
                <FontAwesomeIcon icon={fa1} />
                <FontAwesomeIcon icon={fa0} />
            </div>
            <div className={pageSize === PageSize.max ? style.selected : style.item} onClick={onPageSizeMax}>
                <FontAwesomeIcon icon={fa2} />
                <FontAwesomeIcon icon={fa0} />
            </div>
            <div className={sort === SortPerPage.none ? style.selected : style.item} onClick={onNoneSort}>
                <FontAwesomeIcon icon={faBan} />
            </div>
            <div className={sort === SortPerPage.byRank ? style.selected : style.item} onClick={onRankSort}>
                <FontAwesomeIcon icon={faStar} />
            </div>
            <div className={sort === SortPerPage.byTitle ? style.selected : style.item} onClick={onTitleSort}>
                <FontAwesomeIcon icon={faT} />
            </div>
        </div>
    );

    function createOnClickPageSize(newPageSize: PageSize) {
        return () => {
            setPageSize(newPageSize);
            updateQueryParam("pageSize", newPageSize);
        };
    }

    function createOnClickView(newView: View) {
        return () => {
            setView(newView);
            updateQueryParam("view", newView);
        };
    }

    function createOnClickSort(newSort: SortPerPage) {
        return () => {
            setSortPerPage(newSort);
            updateQueryParam("sort", newSort);
        };
    }

    function setPageSize(newPageSize: PageSize) {
        dispatch(settingsSlice.actions.setPageSize(newPageSize));
    }

    function setView(newView: View) {
        dispatch(settingsSlice.actions.setView(newView));
    }

    function setSortPerPage(newSort: SortPerPage) {
        dispatch(settingsSlice.actions.setSortPerPage(newSort));
    }
}

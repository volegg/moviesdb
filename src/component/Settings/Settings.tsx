import * as React from "react";
import { useCallback, useEffect, useRef } from "react";
import {
    fa0,
    fa1,
    fa2,
    fa4,
    fa5,
    faArrowDownAZ,
    faBan,
    faBars,
    faCalendarDays,
    faGrip,
    faStar,
} from "@fortawesome/free-solid-svg-icons";

import { PageSize, SortPerPage, View } from "src/const/pagination";
import { SettingIcon } from "src/entity/SettingIcon/SettingIcon";
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
            setSortPerPage(queryParam.sort);
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const onReleaseSort = useCallback(createOnClickSort(SortPerPage.byRelease), []);

    return (
        <div className={style.root}>
            <div></div>
            <SettingIcon icon={faBars} selected={view === View.list} onClick={onViewList} />
            <SettingIcon icon={faGrip} selected={view === View.tile} onClick={onViewTile} />

            <SettingIcon icon={fa4} selected={pageSize === PageSize.four} onClick={onPageSizeFour} />
            <SettingIcon icon={fa5} selected={pageSize === PageSize.five} onClick={onPageSizeFive} />
            <SettingIcon icon={fa1} icon2nd={fa0} selected={pageSize === PageSize.ten} onClick={onPageSizeTen} />
            <SettingIcon icon={fa2} icon2nd={fa0} selected={pageSize === PageSize.max} onClick={onPageSizeMax} />

            <SettingIcon icon={faBan} selected={sort === SortPerPage.none} onClick={onNoneSort} />
            <SettingIcon icon={faStar} selected={sort === SortPerPage.byRank} onClick={onRankSort} />
            <SettingIcon icon={faArrowDownAZ} selected={sort === SortPerPage.byTitle} onClick={onTitleSort} />
            <SettingIcon icon={faCalendarDays} selected={sort === SortPerPage.byRelease} onClick={onReleaseSort} />
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

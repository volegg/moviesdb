import * as React from "react";
import { useSelector } from "react-redux";

import { Panel } from "src/entity/Panel/Panel";
import { Poster } from "src/entity/Poster/Poster";
import type { State } from "src/store/store";
import { toMonthYear } from "src/utils/date/toMonthYear";

export function createMovieByTop(title: string, selector: (state: State) => AnyType, style: AnyType) {
    // eslint-disable-next-line react/display-name
    return () => {
        const posters = useSelector(selector);

        return (
            <Panel title={title + " " + posters.length}>
                <div className={style.root}>
                    {posters.map(({ date, ...item }: Movie, i: string) => {
                        return (
                            <Poster
                                key={item.title + "-" + i}
                                {...item}
                                date={toMonthYear(date)}
                                width={110}
                                height={165}
                            />
                        );
                    })}
                </div>
            </Panel>
        );
    };
}

import * as React from "react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { Panel } from "src/entity/Panel/Panel";
import { Poster } from "src/entity/Poster/Poster";
import type { State } from "src/store/store";
import { toMonthYear } from "src/utils/date/toMonthYear";

type MovieTopFactoryProps = {
    onClick(id: number): void;
};

export function createMovieByTop(title: string, selector: (state: State) => AnyType, style: AnyType) {
    // eslint-disable-next-line react/display-name
    return ({ onClick }: MovieTopFactoryProps) => {
        const posters = useSelector(selector);
        const [hidden, setHidden] = useState(true);

        useEffect(() => {
            setHidden(() => posters.length === 0);
        }, [posters]);

        if (posters.length < 1) {
            return null;
        }

        return (
            <Panel title={title + " " + posters.length} hidden={hidden}>
                <div className={style.root}>
                    {posters.map(({ date, ...item }: Movie, i: string) => {
                        return (
                            <Poster
                                key={item.title + "-" + i}
                                {...item}
                                onClick={onClick}
                                date={toMonthYear(date)}
                                width={6}
                                height={9}
                            />
                        );
                    })}
                </div>
            </Panel>
        );
    };
}

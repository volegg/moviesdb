import * as React from "react";

import { Popular20 } from "src/component/Popular20/Popular20";
import { Top20 } from "src/component/Top20/Top20";
import { openMovieTab } from "src/utils/openMovieTab";

export function TopAndPopular() {
    return (
        <>
            <Popular20 onClick={onClick} />
            <Top20 onClick={onClick} />
        </>
    );

    function onClick(id: number) {
        openMovieTab(id);
    }
}

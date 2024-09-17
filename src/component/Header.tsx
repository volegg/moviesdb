import * as React from "react";

import { Header } from "src/entity/Header";
import { selectLayoutName } from "src/layout/selector";
import { useSelector } from "src/store/hooks";

export function HeaderComponent() {
    const layoutName = useSelector(selectLayoutName);

    return <Header header={layoutName} />;
}

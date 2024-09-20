import * as React from "react";
import type { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import style from "./style.pcss";

type SettingIconProps = {
    icon: IconDefinition;
    icon2nd?: IconDefinition;
    selected: boolean;
    onClick(): void;
};

export function SettingIcon({ selected, onClick, icon, icon2nd }: SettingIconProps) {
    return (
        <>
            <div className={selected ? style.selected : style.item} onClick={onClick}>
                <FontAwesomeIcon icon={icon} />
                {icon2nd ? <FontAwesomeIcon icon={icon2nd} /> : null}
            </div>
        </>
    );
}

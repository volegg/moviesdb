import * as React from "react";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type RatingItemProps = {
    value: number;
};

export function RatingItem({ value }: RatingItemProps) {
    return (
        <div>
            <FontAwesomeIcon icon={faStar} color={getStartColor(value)} />
            {value}
        </div>
    );
}

function getStartColor(rating: number) {
    if (rating >= 9) {
        return "#c65915";
    }

    if (rating >= 6) {
        return "#fcd04b";
    }

    if (rating >= 4) {
        return "#fce97e";
    }

    return "#f9f99d";
}

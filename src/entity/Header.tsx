import * as React from "react";

type Header = {
    header: string;
};

export function Header({ header }: Header) {
    return <div>{header}</div>;
}

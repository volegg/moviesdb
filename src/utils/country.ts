import { country } from "src/const/country";

export function getCountryName(shortName: string) {
    const name = country[shortName.toUpperCase()];

    if (!name) {
        return shortName;
    }

    return name;
}

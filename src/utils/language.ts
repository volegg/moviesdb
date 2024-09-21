import { lang } from "src/const/lang";

export function getLangName(shortName: string) {
    const name = lang[shortName.toLowerCase()];

    if (!name) {
        return shortName;
    }

    return name;
}

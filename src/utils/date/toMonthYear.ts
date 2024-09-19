export function toMonthYear(date: string) {
    if (!date) {
        return "";
    }

    const strDate = new Date(date).toString().split(" ");

    return strDate[1] + " " + strDate[3];
}

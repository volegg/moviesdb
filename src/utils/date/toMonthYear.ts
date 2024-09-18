export function toMonthYear(date: string) {
    const strDate = new Date(date).toString().split(" ");

    return strDate[1] + " " + strDate[3];
}

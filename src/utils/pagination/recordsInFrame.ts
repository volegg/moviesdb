import { MovieDB } from "src/const/moviedb";

export function isRecordsInFrame(page: number, userPage: number, pageSize: number) {
    const actualRecordIndex = (page - 1) * MovieDB.pageSize;
    const userRecordIndex = (userPage - 1) * pageSize;

    return actualRecordIndex <= userRecordIndex && actualRecordIndex + MovieDB.pageSize > userRecordIndex;
}

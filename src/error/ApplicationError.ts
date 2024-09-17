import { ApplicationErrorName } from "./errorName";

export class ApplicationError extends Error {
    constructor(message: AnyType) {
        super((message ?? "").toString());
        this.name = ApplicationErrorName;
    }
}
